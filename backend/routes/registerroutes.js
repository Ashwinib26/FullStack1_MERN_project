// routes/registerRoute.js

const express = require('express');
const router = express.Router();
const User = require('../models/usersModel');

// Handle POST request to /register endpoint
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user instance and save it to the database
    const newUser = new User({ username, password });
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

module.exports = router;
