const express = require('express');
const passport = require('passport')
const GoogleStratgey = require('passport-google-oauth20').GoogleStrategy
const router = express();

passport.use(new GoogleStratgey({
    clientID: process.env.GOOGLESECRET,
    clientSecret: process.env.GOOGLEID,
    callbackURL:'/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    console.log(refreshToken)
    console.log(profile)
    console.log(done)

}))

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

router.get('/auth/google/callback', passport.authenticate('google'))