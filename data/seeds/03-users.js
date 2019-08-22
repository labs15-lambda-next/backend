/* eslint-disable implicit-arrow-linebreak */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() =>
      // Inserts seed entries
      knex('users').insert([
        { problem_id: 1, full_name: 'TestUser1', email: 'testuser1@email.com', },
        { problem_id: 2, full_name: 'TestUser2', email: 'testuser2@email.com' },
        { problem_id: 3, full_name: 'TestUser3', email: 'testuser3@email.com' },
      ]));
};
