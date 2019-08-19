exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments()
    tbl.string('username', 128).nonNullable()
    tbl
      .string('email', 256)
      .nonNullable()
      .unique()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
}
