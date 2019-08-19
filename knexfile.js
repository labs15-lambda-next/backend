require('dotenv').config({ path: './.env' });

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: 'postgres',
      host: 'localhost',
      port: 5432
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASS,
      database: process.env.PG_DB
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
