/* eslint-disable implicit-arrow-linebreak */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(() =>
      // Inserts seed entries
      knex('users').insert([
        { full_name: 'TestUser1', email: 'testuser1@email.com', problem_id: 1 },
        { full_name: 'TestUser2', email: 'testuser2@email.com', problem_id: 1 },
        { full_name: 'TestUser3', email: 'testuser3@email.com', problem_id: 1 },
      ]));
};
