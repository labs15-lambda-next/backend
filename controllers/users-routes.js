const router = require('express').Router();
// Model
const sgMail = require('@sendgrid/mail');
const Users = require('../models/users-model');


sgMail.setApiKey(process.env.SEND_KEY);


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
        const msg = {
          to: req.body.email,
          from: 'noreply@lambdaschoolnext.com',
          template_id: 'd-47b2e930d92545a1a17ea05fe08d6752'
        };
        console.log(req.body.email);
        sgMail.send(msg);
        res.status(200).json({
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
