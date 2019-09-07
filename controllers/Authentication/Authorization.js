const router = require('express').Router();
const passport = require('passport');

function checkAuthentication(req, res, next) {
    if(req.isAuthenticated()) {
        next();
    } else {
       return res.redirect('/')
    }
}

function checkAuthorization(req, res, next) {
    if(req.user && req.user.role == 'admin') {
        return next();
    } else {
        return res.status(500).json('You are not an administrator');
    }
}

module.exports = {
    checkAuthentication,
    checkAuthorization
}

