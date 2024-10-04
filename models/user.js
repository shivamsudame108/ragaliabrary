const pool = require('../db');

const User = {
  create: async (username, password) => {
    const res = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [username, password]
    );
    return res.rows[0];
  },
  findByUsername: async (username) => {
    const res = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return res.rows[0];
  },
  // Add additional user-related methods as needed
};

module.exports = User;
