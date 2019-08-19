exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'TestUser1', email: 'testuser1@email.com' },
        { username: 'TestUser2', email: 'testuser2@email.com' },
        { username: 'TestUser3', email: 'testuser3@email.com' }
      ])
    })
}
