// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
const userEmail = require('../models/users-model');


const email = userEmail.getUserEmail('users');
console.log(JSON.stringify({ email }));
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'labs15teamnext@gmail.com',
  from: 'noreply@lambdaschoolnext.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: email,
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
