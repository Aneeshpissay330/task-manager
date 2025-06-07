import express from 'express';
import {
  registerUser,
  verifyEmail,
  loginUser,
  verifyLoginOtp,
  forgotPassword,
  resetPassword
} from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/verify', authMiddleware, verifyEmail);
router.post('/verify-otp', verifyLoginOtp);

// New: Forgot and Reset Password
router.post('/forgot-password', forgotPassword); // POST /api/auth/forgot-password
router.post('/reset-password', authMiddleware, resetPassword); // POST /api/auth/reset-password/:token

export default router;
