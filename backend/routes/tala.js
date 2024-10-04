const express = require('express');
const Tala = require('../models/tala');
const router = express.Router();

router.get('/', async (req, res) => {
  const talas = await Tala.getAll();
  res.json(talas);
});

module.exports = router;
