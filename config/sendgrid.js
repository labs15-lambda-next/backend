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

  // const rating = req.params;
  // const rate = dbConf('problems').where({ rating });
  // console.log('*** this is RATE ***', rate);

  // try {
  //   const rated = await db.getPopularProblems(rate);
  //   // console.log('** this is RATED **', rated);

  //   if (rated > 4) {
  //     // return -1;
  //     res.status(200).json(rated.problem_title);
  //   } else if (rated > 3) {
  //     // return 1;
  //     res.status(200).json(rated.problem_title);
  //   } else {
  //     // return 0;
  //     return null;
  //   }
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
// PG error : 22P02	INVALID TEXT REPRESENTATION	invalid_text_representation

