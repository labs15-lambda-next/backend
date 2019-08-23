exports.up = function (knex) {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments();
    tbl.integer('problem_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('problems')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.string('full_name', 128).notNullable();
    tbl
      .string('email', 256)
      .notNullable()
      .unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
