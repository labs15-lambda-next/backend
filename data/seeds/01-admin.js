
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(() =>
      // Inserts seed entries
      knex('admin').insert([
        {
          id: 1, username: 'Admin1', password: 'test', email: 'admin1@email.com'
        },
        {
          id: 2, username: 'Admin2', password: 'test', email: 'admin2@email.com'
        },
        {
          id: 3, username: 'Admin3', password: 'test', email: 'admin3@email.com'
        }
      ]));
};
