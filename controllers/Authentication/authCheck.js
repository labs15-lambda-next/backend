module.exports = authCheck;
function authCheck(req, res, next) {
  console.log('req admin', req.user);
  if (!req.admin) {
    res.status(401).json({ message: 'Invalid Credentials. Please Log In' });
  } else {
    next();
  }
}
