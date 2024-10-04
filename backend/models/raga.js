const pool = require('../db');

const Raga = {
  getAll: async () => {
    const res = await pool.query('SELECT * FROM raga');
    return res.rows;
  },
  getFavorites: async (userId) => {
    const res = await pool.query(
      'SELECT * FROM raga WHERE id IN (SELECT raga_id FROM favorites WHERE user_id = $1)',
      [userId]
    );
    return res.rows;
  },
  addFavorite: async (userId, ragaId) => {
    await pool.query(
      'INSERT INTO favorites (user_id, raga_id) VALUES ($1, $2)',
      [userId, ragaId]
    );
  },
  removeFavorite: async (userId, ragaId) => {
    await pool.query(
      'DELETE FROM favorites WHERE user_id = $1 AND raga_id = $2',
      [userId, ragaId]
    );
  }
};

module.exports = Raga;
