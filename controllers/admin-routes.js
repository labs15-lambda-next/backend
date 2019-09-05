const router = require('express').Router();

const Admins = require('../models/admin-model.js');
const Problems = require('../models/problem-model');


// gets all the problems and displays it to the admin so they can approve / decline
router.get('/all', async (req, res) => {

  Problems.getProblems().then((problem) => {
    res.json(problem);
  }).catch((error) => {
    res.status(500).json({ message: 'Error retrieving the problems' });
  });
});

router.put('/all/:id', async (req, res) => {
  const { id } = req.params;
  const isApproved = req.body;
  Admins.approveProblem(id);
});

// decline problem, so you delete it
router.delete('/all/:id', (req, res) => {
  const { id } = req.params;
  Problems.deleteProblem(id).then((problem) => {
    res.json(problem);
  });
});
module.exports = router;
