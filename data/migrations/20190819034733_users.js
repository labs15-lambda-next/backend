exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments()
    tbl.integer("post_id")
    .references("id")
    .inTable("posts")
    // Probably Restrict in the future?
    .onDelete("CASCADE")
    .onUpdate("CASCADE");
    tbl.string('full_name', 128).notNullable()
    tbl
      .string('email', 256)
      .notNullable()
      .unique()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
}
