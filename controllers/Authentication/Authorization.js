const router = require('express').Router();
const passport = require('passport');

function checkAuthentication(req, res, next) {
    if(req.isAuthenticated()) {
        next();
        console.log("thisgaga");
    } else {
        console.log("this");
       return res.redirect('/')
    }
}


module.exports = {
    checkAuthentication,
}

