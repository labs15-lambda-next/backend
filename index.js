require('dotenv').config({ path: './.env' });
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const chalk = require('chalk').default;

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

const db = require('./data/dbConfig');

server.get('/', (req, res) => {
  try {
    res.status(200).json({ message: 'Root endpoint is functional.' });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

server.get('/users', async (req, res) => {
  try {
    const users = await db('users');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  const serverRunMsg = `Server is active and listening on http://127.0.0.1:${port}`;
  console.log(chalk.green(serverRunMsg));
});
