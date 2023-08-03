// Modules
const express = require('express');
const {
  signupUser,
  signinUser,
  signoutUser,
  getUserProfile,
  updateUserProfile,
} = require('../controllers/userController');
const protectRoute = require('../middlewares/authMiddleware');

// Routes
const router = express.Router();
router.post('/', signupUser);
router.post('/signin', signinUser);
router.post('/signout', signoutUser);
router
  .route('/profile')
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);

module.exports = router;
