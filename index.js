require('dotenv').config({ path: './.env' });
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const chalk = require('chalk').default;

const server = express();
// middleware
server.use(express.json());
server.use(helmet());
server.use(cors());


// endpoints
const usersRouter = require('./controllers/users-routes');
const problemRouter = require('./controllers/problemRoutes');

server.use('/users', usersRouter);
server.use('/problems', problemRouter);
server.get('/', (req, res) => {
  try {
    res.status(200).json({ message: 'Root endpoint is functional.' });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});


const port = process.env.PORT || 5000;
server.listen(port, () => {
  const serverRunMsg = `Server is active and listening on http://127.0.0.1:${port}`;
  console.log(chalk.green(serverRunMsg));
});
