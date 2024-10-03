const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const ragaRoutes = require('./routes/raga');
const talaRoutes = require('./routes/tala');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/raga', ragaRoutes);
app.use('/api/tala', talaRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
