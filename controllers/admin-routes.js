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

router.get('/all/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const problem = await Problems.getProblemsById(id);
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

router.get('/csv/download', async (req, res) => {
  function dataToCSV(userList, headers) {
    const allObjects = [];
    allObjects.push(headers);

    userList.forEach((object) => {
      const arr = [];
      arr.push(object.id);
      arr.push(object.problem_id);
      arr.push(object.full_name);
      arr.push(object.email);

      allObjects.push(arr);
    });

    let csvContent = '';


    allObjects.forEach((infoArray, index) => {
      const dataString = infoArray.join(',');
      csvContent += index < allObjects.length ? `${dataString}\n` : dataString;
    });

    return csvContent;
  }

});
router.put('/all/:id', async (req, res) => {
  const { id } = req.params;
  const { isApproved } = req.body;
  Admins.approveProblem(id, isApproved).then((problem) => {
    if (isApproved === true) {
      res.status(200).json({ message: 'problem was approved', problem });
    } else {
      res.status(400).json({ message: 'problem was removed from public dashboard' });
    }
  }).catch((error) => {
    console.log('error', error);
  });
});

// decline problem, so you delete it
router.delete('/all/:id', (req, res) => {
  const { id } = req.params;
  Problems.deleteProblem(id).then((problem) => {
    res.json(problem);
  });
});
module.exports = router;
