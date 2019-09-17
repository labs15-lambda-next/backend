const router = require('express').Router();
const passport = require('passport');

// Login with google
router.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account',
  })
);

// google login redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res
    .status(200)
    .cookie('token', res.req.authInfo)
    .redirect(`${process.env.FRONTEND_URL}`);
});


module.exports = router;
