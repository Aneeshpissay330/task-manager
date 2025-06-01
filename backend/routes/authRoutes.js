import express from 'express';
import {
  registerUser,
  verifyEmail,
  loginUser,
  verifyLoginOtp
} from '../controllers/authController.js';

const router = express.Router();

// ✅ Correct handler usage
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/verify/:token', verifyEmail);
router.post('/verify-otp', verifyLoginOtp);

export default router;
