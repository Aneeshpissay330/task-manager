import express from 'express';
import {
  registerUser,
  verifyEmail,
  loginUser,
  verifyLoginOtp,
  forgotPassword,
  resetPassword
} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/verify/:token', verifyEmail);
router.post('/verify-otp', verifyLoginOtp);

// New: Forgot and Reset Password
router.post('/forgot-password', forgotPassword); // POST /api/auth/forgot-password
router.post('/reset-password/:token', resetPassword); // POST /api/auth/reset-password/:token

export default router;
