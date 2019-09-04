// const router = require('express').Router();
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;


// passport.use(new GoogleStrategy({
//   callbackURL: '/auth/google/redirect',
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET
// }, (accessToken, refreshToken, profile, done) => {
//   console.log(accessToken);
//   console.log(refreshToken);
//   console.log(profile);
//   console.log(done);
//   console.log('dsadas');

// }));

// router.get('/google', passport.authenticate('google', {
//   scope: ['profile', 'email']
// }));

// router.get('/auth/google/redirect', passport.authenticate('google'));


// module.exports = router;

const router = require('express').Router();
const passport = require('passport');

// Login with google
router.get(
  '/google',
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
