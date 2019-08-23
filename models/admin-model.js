const db = require('../data/dbConfig');

module.exports = {
  getAdmin,
  getAdminById,
  addAdmin,
  deleteAdmin,
  updateAdmin
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
