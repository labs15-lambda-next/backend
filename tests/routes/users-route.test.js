const server = require('../../index');
const db = require('../../data/dbConfig');

const supertest = ('supertest');

describe('GET /', () => {
  it('returns a list of users from the database', async () => {
    const res = await supertest(server)
      .get('/');
    expect(res.type).toBe('application/json');
    expect(res.status).toBe(200);
  });
});
