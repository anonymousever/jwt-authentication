// Modules
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const User = require('../models/userModel');

// Route: POST /api/users
// Description: Sign up new user
// Access: Public
const signupUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists.');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data.');
  }
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
