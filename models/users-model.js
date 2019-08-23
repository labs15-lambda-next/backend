const db = require('../data/dbConfig');

module.exports = {
  getUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser
};


function getUsers() {
  return db('users').select('id', 'full_name', 'email', 'problem_id');
}
function getUserById(id) {
  return db('users').where({ id }).first();
}
async function addUser(user) {
  const response = await db('users').insert(user);
  return response;
  // const [id] = await db('users').insert(user);
  // return getUserById(id);
}
function updateUser(id, changes) {
  return db('users')
    .where({ id })
    .update(changes);
}
function deleteUser(id) {
  return db('users')
    .where('id', id)
    .del();
}
