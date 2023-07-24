// Modules
const asyncHandler = require('express-async-handler');

// Route: POST /api/users
// Description: Sign up new user
// Access: Public
const signupUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Sign up new user' });
});

// Route: POST /api/users/signin
// Description: Sign in user and set token
// Access: Public
const signinUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Sign in user' });
});

// Route: POST /api/users/signout
// Description: Sign out user
// Access: Private
const signoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Sign out user' });
});

// Route: GET /api/users/profile
// Description: Get user profile
// Access: Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get user profile' });
});

// Route: PUT /api/users/profile
// Description: Update user profile
// Access: Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update user profile' });
});

module.exports = {
  signupUser,
  signinUser,
  signoutUser,
  getUserProfile,
  updateUserProfile,
};
