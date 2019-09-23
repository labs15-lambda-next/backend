const request = require('supertest');
const server = require('../../index');



describe('GET /users', () => {
  it('returns a list of users from the database', async () => {
    const res = await request(server)
      .get('/users');
    expect(res.type).toBe('application/json');
    expect(res.status).toBe(200);
  });
});
