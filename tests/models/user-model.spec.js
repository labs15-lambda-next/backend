const db = require('../../data/dbConfig');
// const Users = require('../../models/users-model');


describe('users model', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  describe('insert function', () => {
    it(' inserts users into the db', async () => {
      const usersNumber = await db('users');
      expect(usersNumber).toHaveLength(0);

    });
  });
});
