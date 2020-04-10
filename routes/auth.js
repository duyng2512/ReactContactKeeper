const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
  res.send('Get Logging User');
});

// @route   POST api/auth
// @desc    Auth user and token
// @access  Public
router.post('/', (req, res) => {
  res.send('Logging user');
});

module.exports = router;
