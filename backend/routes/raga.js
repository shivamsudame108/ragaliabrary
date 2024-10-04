const express = require('express');
const Raga = require('../models/raga');
const router = express.Router();

router.get('/', async (req, res) => {
  const ragas = await Raga.getAll();
  res.json(ragas);
});

router.post('/favorite', async (req, res) => {
  const { userId, ragaId } = req.body;
  await Raga.addFavorite(userId, ragaId);
  res.status(201).send();
});

router.delete('/favorite', async (req, res) => {
  const { userId, ragaId } = req.body;
  await Raga.removeFavorite(userId, ragaId);
  res.status(204).send();
});

module.exports = router;
