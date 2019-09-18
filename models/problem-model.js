const db = require('../data/dbConfig');

module.exports = {
  getProblems,
  getProblemsById,
  insertProblem,
  updateProblem,
  deleteProblem,
  rateProblem,
  updateRating,
  getPopularProblems
};

function getProblems() {
  return db('problems').select(
    'id',
    'problem_title',
    'problem_description',
    'problem_category',
    'date_created',
    'created_by',
    'rating',
    'numOfRatings'
  );
}

function getProblemsById(id) {
  return db('problems').where({ id })
    .first();
}

async function insertProblem(problem) {
  const response = await db('problems').insert(problem);
  return response;
}


function updateProblem(id, update) {
  return db('problems')
    .where('id', id)
    .update(update);
}

function deleteProblem(id) {
  return db('problems')
    .where('id', id)
    .del();
}

function rateProblem(id) {
  return getProblemsById();
}

function updateRating(id, user) {
  return db('problems')
    .where({ id })
    .update(user);
}

function getPopularProblems() {
  return db('problems').select(
    'problem_title',
    'problem_description',
    'problem_category',
    'rating'
  );
}
