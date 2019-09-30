require('dotenv').config({ path: './.env' });
const express = require('express');
// const auth = require('./controllers/Authentication/Authorization');
const cors = require('cors');
const helmet = require('helmet');
const chalk = require('chalk').default;
const passport = require('passport');
const passportSetup = require('./controllers/Authentication/passport-setup');
const authCheck = require('./controllers/Authentication/authCheck');

const server = express();
const cookieSession = require('cookie-session');
// middleware
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

server.use(
  cookieSession({
    name: 'cookie',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.SESSION_COOKIE],
    secure: false,
    // httpOnly: true,
    signed: true,
  })
);
server.use(express.json());
server.use(helmet());
server.use(cors(corsOptions));
// initialize passport
server.use(passport.initialize());
server.use(passport.session());
// endpoints
const usersRouter = require('./controllers/users-routes');
const problemRouter = require('./controllers/problemRoutes');
const authRouter = require('./controllers/Authentication/Authentication');
const adminRouter = require('./controllers/admin-routes');

server.use('/users', usersRouter);
server.use('/admin', authCheck, adminRouter, (req, res) => {
  res.json({
    message: 'You have accessed the protected endpoint!',
    yourUserInfo: req.user
  });
});
server.use('/problems', problemRouter);
server.use('/auth', authRouter);
server.use('/logout', (req, res) => {
  req.logOut();
  res.status(400).redirect(`${process.env.FRONTEND_URL}`);
});
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


module.exports = server;
