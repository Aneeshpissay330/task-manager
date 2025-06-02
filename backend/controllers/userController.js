// controllers/userController.js

import User from '../models/User.js';

export const getProfile = async (req, res) => {
  // #swagger.tags = ['User']
  if (!req.user) {
    return res.status(401).json({ message: 'User not authenticated' });
  }

  try {
    // 2) Find the user by ID, selecting only the fields you care about:
    const user = await User.findById(req.user.id).select(
      '_id fullName email phone isVerified createdAt updatedAt'
    );

    // 3) If no user was found, return 404
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // 4) Return just the selected fields
    return res.status(200).json(user);
  } catch (err) {
    console.error('getProfile error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};
