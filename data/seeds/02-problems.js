
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('problems')
    .truncate()
    .then(() =>
    // Inserts seed entries
      knex('problems').insert([
        {
          problem_title: 'Ieed to keep track of my medical stats', problem_description: '', problem_category: '', date_created: '', created_by: '', admin_id: ''
        },
        {
          problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: '', admin_id: ''
        },
        {
          problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: '', admin_id: ''
        },
        {
          problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: '', admin_id: ''
        },
        {
          problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: '', admin_id: ''
        },
        {
          problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: '', admin_id: ''
        },
        {
          problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: '', admin_id: ''
        },
        {
          problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: '', admin_id: ''
        },
        {
          problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: '', admin_id: ''
        },
      ]));
};
