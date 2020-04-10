const express = require('express');
const router = express.Router();

// @route   GET api/contact
// @desc    Get all user contacts
// @access  Private
router.get('/', (req, res) => {
  res.json({ msg: 'Contact Keeper API ...' });
});

// @route   POST api/contact
// @desc    Send new contacts
// @access  Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route   PUT api/contact/:id
// @desc    Update contacts
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route   DEL api/contact/:id
// @desc    Delete contacts
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
