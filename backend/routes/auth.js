const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findByUsername(username);
  
  if (user && user.password === password) {
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    return res.json({ token });
  }
  
  res.status(401).send('Invalid credentials');
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const newUser = await User.create(username, password);
  res.status(201).json(newUser);
});

module.exports = router;
