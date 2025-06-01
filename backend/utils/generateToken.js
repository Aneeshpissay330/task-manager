import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      avatarUrl: user.avatarUrl,
      preferences: user.preferences,
      isVerified: user.isVerified,
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

export const generateActivationToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
};

export const generateResetToken = (user) => {
  // Signs a JWT with the user’s ID, expires in 1 hour
  return jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};
