const db = require('../data/dbConfig');

module.exports = {
  getAdmin,
  getAdminById,
  addAdmin,
  deleteAdmin,
  updateAdmin,
  getByEmail,
  add,
  approveProblem
};


function getAdmin() {
  return db('admin').select('id', 'username', 'password', 'email');
}
function getAdminById(id) {
  return db('admin').where({ id }).first();
}
async function addAdmin(admin) {
  const [id] = await db('admin').insert(admin);
  return getAdminById(id);
}
function updateAdmin(id, changes) {
  return db('admin')
    .where({ id })
    .update(changes);
}
function deleteAdmin(id) {
  return db('admin')
    .where('id', id)
    .del();
}

function getByEmail(filter) {
  return db('admin')
    .where('email', '=', filter)
    .first();
}
function add(admin) {
  return db('admin').insert(admin, 'id');
}

function approveProblem(id, problem) {
  console.log('admin model prboel', problem);
  return db('problems').where({ id }).update({ isApproved: problem });
}
