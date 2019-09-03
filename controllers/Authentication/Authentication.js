const express = require('express');
const passport = require('passport')
const GoogleStratgey = require('passport-google-oauth20').GoogleStrategy
const keys = require('./Keys');

passport.use(new GoogleStratgey({
    clientID: keys.googleAuthClientID,
    clientSecret: keys.googleAuthSecret,
    callbackURL:''
}))