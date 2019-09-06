const router = require('express').Router();
// Model
const Users = require('../models/users-model');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

// sned msg
// const sendMessage = require('../config/sendgrid');

router.get('/', async (req, res) => {
  try {
    const users = await Users.getUsers('users');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * Description: User will sign up for a problem
 *
 */
router.post('/signup', async (req, res) => {
  
  const { problem_id, full_name, email } = req.body;

  if (!problem_id, !full_name || !email) {
    res.status(404).json({ message: 'Enter your name and email' });
  } else {
    
    Users.addUser(req.body)
      .then((user) => {
        const sendEmails = async () => {

    const emails = await Users.getUserEmail('users')
      emails.map(user => {
    const msg = {
      to: req.body.email,
      from: 'noreply@labs15teamnext.com',
      subject: 'Sending with Twilio SendGrid is Fun',
      html:`<strong>List of users:</strong><br>${user.full_name}<br>${user.email}`,
    };

    // sgMail.send(msg);
  })
  }
        res.status(200).json(sgMail.send(msg),{
          message: `new user signed up: ${email}`,
          user: req.body,
        });
      })
      .catch((error) => {
        res.status(500).json({ message: `error:, ${error}` });
      });
  }
});

module.exports = router;
