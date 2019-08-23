const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendMessage(msg) {
  return sgMail.send(msg);
}
const msg = {
  to: '',
  from: 'noreply@lambdaschoolnext.com',
  subject: 'Welcome to Lambaschool Next',
  text: 'Thank you for signing up! Our staff will reach out when the research begins',
  html: '<strong>Thank you, Lambda Next Team</strong>',
};
// sgMail.send(msg);


module.exports = sendMessage;
