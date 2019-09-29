const router = require('express').Router();
const passport = require('passport');
const generateToken = require('../../config/generateToken');

// Login with google
router.get('/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account',
  }));

// google login redirect
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  // console.log('user in redirect', req.user);
  const token = generateToken(req.user);
  // console.log('token from generate token', token);
  res
    .cookie('token', token);
  res
    .status(200)
    .redirect(`${process.env.FRONTEND_URL}/admin`);
  // console.log(' cookie or token: ', token);


  /*
    Downloads small html page that contains token.
    Sets in in the local storage, but the issue is it's only storing on the server.
    If the client was in the same folder as the Backend then this would work.
  */
  //   const jwt = generateToken(req.user);
  //   const htmlWithEmbeddedJWT = `
  //     <html>
  //       <script>
  //         // Save JWT to localStorage
  //         window.localStorage.setItem('JWT', '${jwt}');
  //         // Redirect browser to root of application
  //         window.location.href = '/';
  //       </script>
  //     </html>
  //     `;

  //   res.send(htmlWithEmbeddedJWT);

  // const jwt = generateToken(req.user);
  // const redirectURL = `/admin#${jwt}`;
  // res.redirect(`${process.env.FRONTEND_URL}${redirectURL}`);
});

module.exports = router;
