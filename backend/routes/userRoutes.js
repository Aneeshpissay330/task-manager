import express from 'express';
import { getProfile } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// @route   GET /api/user/profile
// @desc    Get user profile from token
// @access  Private
router.get('/profile', authMiddleware, getProfile);

export default router;
