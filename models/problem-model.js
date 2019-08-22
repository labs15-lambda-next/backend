const db = require('../data/dbConfig');

module.exports = {
  getProblems,
  getProblemsById,
  insertProblem,
  updateProblem,
  deleteProblem
};

function getProblems() {
  return db('problems').select('id', 'problem_title', 'problem_description', 'problem_category', 'date_created', 'created_by');
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
