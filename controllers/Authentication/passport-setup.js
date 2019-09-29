const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const jwt = require('jsonwebtoken');
// const secrets = require('../../config/secrets.js');
const Admins = require('../../models/admin-model');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/auth/google/redirect',
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    (accessToken, refreshToken, profile, done) => {
      verifyGoogleUser({ profile, token: accessToken }, done);
      // console.log(accessToken);
    }
  )
);

const verifyGoogleUser = async (obj, done) => {
  const { profile, token } = obj;
  const user = await Admins.getByEmail(profile.emails[0].value).catch((err) => console.error(err));
  // const clientToken = generateToken(user);
  // console.log('clientToken', clientToken);
  try {
    if (!user) {
      const [id] = await Admins.add({
        email: profile.emails[0].value,
        google_id: profile.id,
      });
      done(null, await Admins.getAdminById(id), token);
    } else {
      done(null, user, token);
    }
  } catch (err) {
    console.error(err);
  }
};
// function generateToken(admin) {
//   console.log('clg admin id', admin.id);
//   console.log('admin email', admin.email);
//   const payload = {
//     subject: admin.id || admin.google_id,
//     email: admin.email
//   };

//   const options = {
//     expiresIn: '1d'
//   };

//   return jwt.sign(payload, secrets.jwtSecret, options);
// }
