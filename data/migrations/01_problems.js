exports.up = function (knex) {
  return knex.schema.createTable('problems', (tbl) => {
    tbl.increments();
    tbl
      .string('problem_title')
      .notNullable();
    tbl
      .string('problem_description')
      .notNullable();
    tbl
      .string('problem_category') // if dropdown is it still a string?
      .notNullable();
    tbl
      .integer('date') // for dates is int correct?
      .notNullable();
    tbl
      .string('created_by');
    tbl
      .integer('admin_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('admin')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('problems');
};
