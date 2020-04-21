const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    /** Username must be an email */
    check('name', 'Name is required').not().isEmpty(),
    // password must be at least 5 chars long
    check('email', 'Email is required').isEmail(),
    check(
      'password',
      'Password is required and have at least 6 characters'
    ).isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email: email });
      if (user) {
        return res.status(400).json({ msg: 'User already exist' });
      }

      user = new User({
        name,
        email,
        password,
      });
      /** Encrypt password */
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      /** Save into Database */
      await user.save();

      /** Pay Load */
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.get('/', (req, res) => {
  res.send('Getting Users');
});

module.exports = router;
