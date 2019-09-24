const express = require('express');
const db = require('../models/problem-model');
const Users = require('../models/users-model');
const dbConf = require('../data/dbConfig');

const router = express.Router();

router.post('/', (req, res) => {
  const {
    problem_title,
    problem_description,
    problem_category,
    date_created,
    created_by
  } = req.body;
  if (!problem_title || !problem_description || !problem_category || !date_created) {
    res.status(400).json({ errorMessage: 'Make sure all the required fields are included.' });
  } else {
    db
      .insertProblem({
        problem_title,
        problem_description,
        problem_category,
        date_created,
        created_by
      })

      .then((id) => {
        res.status(200).json({ message: 'Problem has been posted' });
      })
      .catch((err) => {
        res.status(500).json({ error: `${err}` });
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

router.get('/popular', (req, res) => {
  db
    .getPopularProblems()
    .then((rated) => {
      const ratingArr = rated.filter((sorted) => {
        return sorted.rating > 3;
      });
      res.json(ratingArr);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Error getting popular problems' });
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

// post id
router.post('/:id/signup', async (req, res) => {
  const { problem_id, full_name, email } = req.body;

  if (!problem_id || !full_name || !email) {
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

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { problem_title, problem_description, problem_category } = req.body;
  db
    .updateProblem(id, { problem_title, problem_description, problem_category })
    .then((problem) => {
      res.json(problem);
    });
});

router.put('/:id/rate', (req, res) => {
  const { id } = req.params;

  dbConf('problems')
    .where({ id })
    .first()
    .then((problem) => {
      const newRatingFirst = problem.numOfRatings * problem.rating + req.body.rating;
      problem.numOfRatings += 1;
      const finalRating = newRatingFirst / problem.numOfRatings;

      problem.rating = Math.round(finalRating * 100) / 100;

      dbConf('problems')
        .update(problem)
        .where({ id })
        .then((p) => {
          res.status(201).json(problem);
        })
        .catch((err) => res.status(500).json({ message: 'something went wrong while rating this problem.' }));
    })
    .catch((err) => res.status(404).json({ message: 'unable to find that problem.' }));
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
