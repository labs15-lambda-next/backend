exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('problems').del()
    .then(() =>
    // Inserts seed entries
      knex('problems').insert([
        {
          admin_id: 1, problem_title: 'Ieed to keep track of my medical stats', problem_description: '', problem_category: '', date_created: Date, created_by: ''
        },
        {
          admin_id: 2, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
        {
          admin_id: 3, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
        {
          admin_id: 4, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
        {
          admin_id: 5, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
        {
          admin_id: 6, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
        {
          admin_id: 7, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
        {
          admin_id: 8, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
        {
          admin_id: 9, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
      ]));
};
