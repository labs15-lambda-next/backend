const router = require('express').Router();
// Model
const Users = require('../data/dbConfig');


router.get('/', async (req, res) => {
  try {
    const users = await Users('users');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/signup', async (req, res) => {
  const { full_name, email } = req.body;

  if (!full_name || !email) {
    res.status(404).json({ message: 'Enter your name and email' });
  } else {
    Users.insert(req.body)
      .then((user) => {
        res.status(200).json({
          message: `new user signed up: ${user}`,
          user: req.body
        });
      })
      .catch((error) => {
        res.status(500).json({ message: `error 500 hundo, ${error}` });
      });
  }
});

module.exports = router;
