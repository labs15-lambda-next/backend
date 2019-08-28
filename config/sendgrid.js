// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

const userEmails = require('../models/users-model');

const emails = userEmails.getUserEmail('users');
const to_list = [];

// console.log(email);
// for (i = 0; i > emails.length; i++) {
//   to_list.push(emails[k]);
// }
console.log('list: ', emails);
sgMail.setApiKey('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');
const msg = {
  to: 'labs15teamnext@gmail.com',
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: `${emails}`,
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
