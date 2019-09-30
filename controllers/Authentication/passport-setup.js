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
  try {
    const user = await Admins.getByEmail(profile.emails[0].value);
    // console.log('CLG FN USER.EMAIL', user.email);
    // determine if they are a admin
    if (profile.emails[0].value.includes('@lambdaschool.com') || profile.emails[0].value.includes('labs15teamnext@gmail.com')) {
      // they are a admin
      console.log('add admin');
      console.log('CLG THIS THE USER', user);
      if (!user) {
        const [id] = await Admins.add({
          email: profile.emails[0].value,
          google_id: profile.id,
        });
        done(null, await Admins.getAdminById(id), token);
      } else {
        done(null, await Admins.getAdminById(user.id), token);
      }
    } else {
      done('You do not have the rights', null, null);
    }
  } catch (err) {
    console.log('CLG THE ERROR CATCH', err);
    done(err, null, token);
  }
  // const clientToken = generateToken(user);
  // console.log('clientToken', clientToken);
  // console.log('user.email ps', user.email);
  // const clientDomain = '@lambdaschool.com';
  // const domain = user.substr(profile.emails.length - clientDomain.length);
  // console.log('profile json email', profile.emails[0].value);
  // console.log('CLG THE F USER', user);

  // if (!profile._json.domain || profile.emails[0].value !== 'labs15teamnext@gmail.com') {
  //   done(null, false, { message: 'Not allow access!' });
  // }
  // try {
  //   if (!user) {
  //     // console.log('CLG FN USER.EMAIL', user.email);
  //     // determine if they are a admin
  //     if (profile.emails[0].value.includes('@lambdaschool.com') || profile.emails[0].value.includes('labs15teamnext@gmail.com')) {
  //       // they are a admin
  //       console.log('add admin');
  //       const [id] = await Admins.add({
  //         email: profile.emails[0].value,
  //         google_id: profile.id,
  //       });
  //       done(null, await Admins.getAdminById(id), token);
  //     } else {
  //       console.log('not allowed access');
  //       // they are not a admin
  //       done(null, false, { message: 'Not allow access!' });
  //     }
  //   } else {
  //     done(new Error('Not allowed in here'), user, token);
  //   }
  // } catch (err) {
  //   done(err, false, { message: 'Not allow access!' });
  //   console.error(err);
  // }
};
