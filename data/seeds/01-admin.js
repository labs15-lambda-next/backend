
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(() =>
      // Inserts seed entries
      knex('table_name').insert([
        { username: 'testUser1', password: 'test', email: 'testUser1@email.com' },
        { username: 'testUser2', password: 'test', email: 'testUser2@email.com' },
        { username: 'testUser3', password: 'test', email: 'testUser3@email.com' }
      ]));
};
