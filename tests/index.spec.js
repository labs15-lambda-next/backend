// const supertest = require('supertest');
// const server = require('../index');

describe('Server', () => {
  it('it should be running on the Testing env', () => {
    expect(process.env.NODE_ENV).toBe('test');
  });

});
