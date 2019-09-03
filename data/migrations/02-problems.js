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
      .string('problem_category')
      .notNullable();
    tbl
      .string('date_created')
      .notNullable();
    tbl
      .string('created_by');

    tbl.float('rating', 8);

    tbl.integer('numOfRatings', 8);
  });
};
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('problems');
};
