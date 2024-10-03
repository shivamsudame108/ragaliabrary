const pool = require('../db');

const Tala = {
  getAll: async () => {
    const res = await pool.query('SELECT * FROM tala');
    return res.rows;
  },
};

module.exports = Tala;
