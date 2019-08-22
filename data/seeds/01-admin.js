
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(() =>
      // Inserts seed entries
      knex('admin').insert([
        {
          id: 1, username: 'testUser1', password: 'test', email: 'testUser1@email.com'
        },
        {
          id: 2, username: 'testUser2', password: 'test', email: 'testUser2@email.com'
        },
        {
          id: 3, username: 'testUser3', password: 'test', email: 'testUser3@email.com'
        }
      ]));
};
