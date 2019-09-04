const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
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
    }
  )
);

const verifyGoogleUser = async (obj, done) => {
  const { profile, token } = obj;
  const user = await Admins.getByEmail(profile.emails[0].value).catch((err) => console.error(err));

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
