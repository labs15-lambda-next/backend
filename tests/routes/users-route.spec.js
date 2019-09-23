const request = require('supertest');
const server = require('../../index');



describe('GET /users', () => {
  it('returns a list of users from the database', () => request(server)
    .get('/users')
    .expect(200));

});
