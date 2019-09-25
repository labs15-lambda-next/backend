module.exports = authCheck;
function authCheck(req, res, next) {
  // console.log('req user:', req.user);
  // console.log('req headers cookie: ', req.headers);
  if (!req.headers.cookie) {
    res.status(401).json({ message: 'Invalid Credentials. Please Log In' });
  } else {
    next();
  }
}
