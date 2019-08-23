const nodemailer = require('nodemailer');
// model
const db = require('../models/users-model');
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gmail.user@gmail.com',
    pass: process.env.MAILER_PASS
  }
});

const email_arr = db.users.distinct('email', { /* Any condition you want to put */ });

const mailOptions = {
  from: 'test@example.com', // sender address
  subject: 'Hello ✔', // Subject line
  text: 'Hello This is an auto generated Email for testing  from node please ignore it', // plaintext body
  to: email_arr
};


// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  return console.log('Message %s sent: %s', info.messageId, info.response);
});
