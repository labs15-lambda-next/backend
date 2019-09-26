const db = require('../data/dbConfig');

module.exports = {
  getUsers,
  getUserEmail,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
  // getEmailProblem
};


function getUsers() {
  return db('users').select('id', 'full_name', 'email', 'problem_id');
}

function getUserEmail() {
  return db('users').select('full_name', 'email');
}
function getUserById(id) {
  return db('users').where({ id }).first();
}
async function addUser(user) {
  // const getUser = await getUsers();
  // console.log(user);
  const { email, problem_id } = user;
  // console.log('clg usr modle', getUser);
  // console.log(getUser.email);
  // getUser.filter((filt) => (getUser.email && getUser.problem_id) === (user.email && user.problem_id));
  const check = await db('users').where({ email, problem_id }).first();
  console.log('check', check);

  if (!check) {
    const response = await db('users').insert(user);
    return response;
  }
    return "Email already exists"

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

// function getEmailProblem(userNameList, problem_id, email) {
//   return db('users').select('problem_id', 'email')
//     .where('email', email)
//     .then(() => {
//       if (email === 0) {
//         return console.log('email n problem id edxiszts');
//       }

//       return addUser();


//     });
// }
