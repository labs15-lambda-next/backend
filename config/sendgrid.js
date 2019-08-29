// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// const sgMail = require('@sendgrid/mail');

// const userEmails = require('../models/users-model');

// sgMail.setApiKey('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');

// const sendEmails = async () => {
//   const emails = await userEmails.getUserEmail('users');

//   emails.map(user => {
//     const msg = {
//       to: 'labs15teamnext@gmail.com',
//       from: 'noreply@labs15teamnext.com',
//       subject: 'Sending with Twilio SendGrid is Fun',
//       html:`<strong>List of users:</strong><br>${user.full_name}<br>${user.email}`,
//     };

//     sgMail.send(msg);
//   })
// }

// sendEmails()
