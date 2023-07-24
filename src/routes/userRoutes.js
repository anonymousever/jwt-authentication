// Modules
const express = require('express');
const {
  signupUser,
  signinUser,
  signoutUser,
  getUserProfile,
  updateUserProfile,
} = require('../controllers/userController');

// Routes
const router = express.Router();
router.post('/', signupUser);
router.post('/signin', signinUser);
router.post('/signout', signoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);

module.exports = router;
