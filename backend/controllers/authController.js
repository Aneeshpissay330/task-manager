import User from '../models/User.js';
import { generateToken, generateActivationToken, generateResetToken } from '../utils/generateToken.js';
import sendEmail from '../utils/sendEmail.js';
import jwt from 'jsonwebtoken';
import activationEmail from '../utils/emailTemplates/activationEmail.js';
import { otpEmailTemplate } from '../utils/emailTemplates/otpEmailTemplate.js';
import resetPasswordEmailTemplate from '../utils/emailTemplates/resetPasswordEmailTemplate.js';


export const registerUser = async (req, res, next) => {
  // #swagger.tags = ['Auth']
  /* #swagger.parameters['body'] = {
    in: 'body',
    description: 'User registration data',
    schema: 
    {
      fullName: 'string',
      email: 'string',
      password: 'string',
      phone: 'string'
    }
  } */
  try {
    const { fullName, email, password, phone } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=2a7cf6&color=ffffff&size=256`;

    const user = await User.create({ fullName, email, password, phone, avatarUrl });

    const activationToken = generateActivationToken(user);
    const activationLink = `${req.protocol}://${req.get('host')}/api/auth/verify/${activationToken}`;

    await sendEmail(
      user.email,
      'Verify Your Account',
      activationEmail(user.fullName, activationLink)
    );

    res.status(201).json({
      message: 'Registration successful. Please check your email to verify your account.',
    });
  } catch (err) {
    next(err);
  }
};

export const verifyEmail = async (req, res, next) => {
  // #swagger.tags = ['Auth']
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (user.isVerified) return res.json({ message: 'User already verified' });

    user.isVerified = true;
    await user.save();

    res.json({ message: 'Email verified successfully' });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  // #swagger.tags = ['Auth']
  /* #swagger.parameters['body'] = {
    in: 'body',
    description: 'User login data',
    schema: 
    {
      email: 'string',
      password: 'string'
    }
  } */
  try {
    const { email, password } = req.body;

    // 1) Find user and pull in the password field so we can compare:
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 2) Compare passwords:
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 3) Make sure the user has already verified their email/activation link:
    if (!user.isVerified) {
      return res.status(403).json({
        message: 'Please verify your email before logging in.',
      });
    }

    // ────> Now generate a 6-digit numeric OTP (as a string):
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP on the user document, set expiry to e.g. 10 minutes from now:
    user.otpCode = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    // Email the OTP to the user:
    const subject = 'Your login OTP';
    const html = otpEmailTemplate(user.fullName, otp);
    await sendEmail(user.email, subject, html);

    // Finally, respond to the client letting them know to check their email:
    return res.status(200).json({
      message: 'OTP sent to your email address. Please enter it to complete login.'
    });

  } catch (err) {
    next(err);
  }
};

export const verifyLoginOtp = async (req, res, next) => {
  // #swagger.tags = ['Auth']
  /* #swagger.parameters['body'] = {
    in: 'body',
    description: 'Verify login OTP',
    schema: 
    {
      email: 'string',
      otp: 'string'
    }
  } */
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ message: 'Email and OTP are both required' });
    }

    // 1) Find the user by email (we don’t need password here)
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // 2) Check if an OTP exists and hasn’t expired
    if (!user.otpCode || !user.otpExpires) {
      return res.status(400).json({ message: 'No OTP was requested. Please login first.' });
    }
    if (user.otpExpires < Date.now()) {
      // OTP is expired
      // Optional: clear out the expired OTP so they have to re-login to get a fresh one
      user.otpCode = null;
      user.otpExpires = null;
      await user.save();
      return res.status(400).json({ message: 'OTP has expired. Please login again.' });
    }

    // 3) Compare submitted OTP vs stored OTP
    if (otp !== user.otpCode) {
      return res.status(400).json({ message: 'Invalid OTP. Please try again.' });
    }

    // 4) OTP is valid → clear it from the user document
    user.otpCode = null;
    user.otpExpires = null;
    await user.save();

    // 5) Generate a JWT and return it
    const token = generateToken(user._id);
    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      token, // this is your usual login token
    });

  } catch (err) {
    next(err);
  }
};

export const forgotPassword = async (req, res, next) => {
  // #swagger.tags = ['Auth']
  /* #swagger.parameters['body'] = {
    in: 'body',
    description: 'Forgot password request',
    schema: 
    {
      email: 'string'
    }
  } */
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Please provide your email address.' });
    }

    // 1) Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      // For security, you might still return a 200 but say “If that email exists, we sent a reset link.”
      return res.status(404).json({ message: 'No account found with that email.' });
    }

    // 2) Generate a JWT that expires in 1 hour
    const resetToken = generateResetToken(user);

    // 3) Build a reset URL and email it
    const resetLink = `${req.protocol}://${req.get('host')}/api/auth/reset-password/${resetToken}`;
    const html = resetPasswordEmailTemplate(user.fullName, resetLink);

    await sendEmail(user.email, 'Reset Your Password', html);

    // 4) Respond to the client
    return res.status(200).json({
      message: 'If an account with that email exists, you will receive a password reset link.',
    });
  } catch (err) {
    console.error('forgotPassword error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const resetPassword = async (req, res, next) => {
  // #swagger.tags = ['Auth']
  /* #swagger.parameters['body'] = {
    in: 'body',
    description: 'Reset password data',
    schema: 
    {
      newPassword: 'string'
    }
  } */
  try {
    const { token } = req.params;
    const { newPassword } = req.body;

    if (!newPassword) {
      return res.status(400).json({ message: 'Please provide a new password.' });
    }

    // 1) Verify the JWT
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (verifyErr) {
      return res.status(400).json({ message: 'Invalid or expired reset token.' });
    }

    // 2) Find the user by the ID inside the token payload
    const user = await User.findById(decoded.id).select('+password');
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // 3) Update the password (the bcrypt pre‐save hook will hash it)
    user.password = newPassword;
    await user.save();

    // 4) (Optional) You could email a confirmation that password was changed

    return res.status(200).json({ message: 'Password has been reset successfully.' });
  } catch (err) {
    console.error('resetPassword error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};