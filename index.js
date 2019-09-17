require('dotenv').config({ path: './.env' });
const express = require('express');
// const auth = require('./controllers/Authentication/Authorization');
const cors = require('cors');
const helmet = require('helmet');
const chalk = require('chalk').default;
const passport = require('passport');
const passportSetup = require('./controllers/Authentication/passport-setup');

const server = express();
// middleware
// const corsOptions = {
//   origin: process.env.FRONTEND_URL,
//   credentials: true,
// };
server.use(express.json());
server.use(helmet());
server.use(cors());
// initialize passport
server.use(passport.initialize());
server.use(passport.session());
// endpoints
const usersRouter = require('./controllers/users-routes');
const problemRouter = require('./controllers/problemRoutes');
const authRouter = require('./controllers/Authentication/Authentication');
const adminRouter = require('./controllers/admin-routes');

server.use('/users', usersRouter);
server.use('/admin', adminRouter);
server.use('/problems', problemRouter);
server.use('/auth', authRouter);
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
