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
      // console.log(accessToken);
    }
  )
);

const verifyGoogleUser = async (obj, done) => {
  const { profile, token } = obj;

  // try {
  //   if (!profile.emails[0].value || profile.emails[0].value !== 'lambdaschool.com' || !profile.emails[0].value !== 'labs15teamnext@gmail.com') {
  //     return done(null, false, { message: 'not allowed to access' });
  //   }
  // } catch (err) {
  //   console.log(err);
  // }
  const user = await Admins.getByEmail(profile.emails[0].value).catch((err) => console.error(err));
  // const clientToken = generateToken(user);
  // console.log('clientToken', clientToken);
  // console.log('user.email ps', user.email);
  // const clientDomain = '@lambdaschool.com';
  // const domain = user.substr(profile.emails.length - clientDomain.length);
  console.log('profile json email', profile.emails[0].value);
  console.log('CLG THE F USER', user);
  try {
    if (!profile._json.domain || profile.emails[0].value !== 'labs15teamnext@gmail.com') {
      done(null, false, { message: 'Only Lambda Staff are allowed to access' });
    } if (!user || !user.email) {
      console.log('CLG FN USER.EMAIL', user.email);
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
