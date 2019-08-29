const router = require('express').Router();
// Model
const Admins = require('../models/admin-model');

router.get('/', async (req, res) => {
  try {
    const { id } = req.user;
    const info = await Admins.getAdminById(id);
    console.log(info);
    res.status(200).json(info);
  } catch (e) {
    res.status(500).json({ message: 'Could not get user info' });
  }
});

module.exports = router;
