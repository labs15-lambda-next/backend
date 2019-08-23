const express = require('express');
const db = require('../models/problem-model');

const router = express.Router();

router.post('/', (req, res) => {
  const {
    problem_title, problem_description, problem_category, date_created, created_by, admin_id
  } = req.body;
  if (!problem_title || !problem_category) {
    res.status(400).json({ errorMessage: 'You are missing either a category or a problem title' });
  } else {
    db
      .insertProblem({
        problem_title,
        problem_description,
        problem_category,
        date_created,
        created_by,
        admin_id
      })

      .then((id) => {
        console.log('testing post req');
        res.json(id);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

router.get('/', (req, res) => {
  db
    .getProblems()
    .then((problem) => {
      res.json(problem);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Error getting problem board' });
    });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const problem = await db.getProblemsById(id);
    if (problem) {
      res.status(200).json(problem);
    } else {
      res
        .status(404)
        .json({ message: 'Problem with specified ID does not exist.' });
    }
  } catch (error) {
    res
      .status(404)
      .json({ message: `The reason you're getting an error: ${error}` });
  }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { problem_title, problem_description, problem_category } = req.body;
  db
    .updateProblem(id, { problem_title, problem_description, problem_category })
    .then((problem) => {
      res.json(problem);
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db
    .deleteProblem(id)
    .then((problem) => {
      res.json(problem);
    });
});

module.exports = router;
