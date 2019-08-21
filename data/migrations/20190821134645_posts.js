exports.up = function (knex) {
  return knex.schema.createTable('posts', (tbl) => {
    tbl.increments();
    tbl.integer('admin_id')
      .references('id')
      .inTable('admin')
    // Probably Restrict in the future?
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.string('problem_title', 128).notNullable();
    tbl
      .string('problem_description', 256)
      .notNullable()
      .unique();
    tbl
      .string('category', 128);
    tbl
      .timestamp('created_at')
      .notNullable()
      .default(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('posts');
};
