const express = require('express');
const db = require('../models/problem-model');

const problemRouter = express.Router();

problemRouter.post('/', (req, res) => {
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

problemRouter.get('/', (req, res) => {
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

problemRouter.get('/:id', (req, res) => {
  db
    .getProblemsById(req.params.id)
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Error getting problem by ID' });
    });
});

problemRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const { problem_title, problem_description, problem_category } = req.body;
  db
    .updateProblem(id, { problem_title, problem_description, problem_category })
    .then((problem) => {
      res.json(problem);
    });
});

problemRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  db
    .deleteProblem(id)
    .then((problem) => {
      res.json(problem);
    });
});

module.exports = problemRouter;
