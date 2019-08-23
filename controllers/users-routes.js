const router = require('express').Router();
// Model
const Users = require('../models/users-model');


router.get('/', async (req, res) => {
  try {
    const users = await Users.getUsers('users');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/signup', async (req, res) => {
  const { problem_id, full_name, email } = req.body;

  if (!problem_id, !full_name || !email) {
    res.status(404).json({ message: 'Enter your name and email' });
  } else {
    Users.addUser(req.body)
      .then((user) => {
        res.status(200).json({
          message: `new user signed up: ${email}`,
          user: req.body
        });
      })
      .catch((error) => {
        res.status(500).json({ message: `error:, ${error}` });
      });
  }
});

module.exports = router;
