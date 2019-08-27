exports.up = function (knex) {
  return knex.schema.createTable('admin', (tbl) => {
    tbl.increments();
    tbl.string('username', 128).notNullable();
    tbl
      .string('email', 256)
      .notNullable()
      .unique();
    tbl
      .string('password', 128)
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('admin');
};
