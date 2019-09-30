const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = function generateToken(user) {
  // console.log('clg admin id', user.id);
  // console.log('user email', user.email);
  const payload = {
    subject: user.id || user.google_id,
    email: user.email
  };

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
};
