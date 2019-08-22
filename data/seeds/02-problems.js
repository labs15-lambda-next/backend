exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('problems').del()
    .then(() =>
    // Inserts seed entries
      knex('problems').insert([
        {
          id: 1, admin_id: 1, problem_title: 'Ieed to keep track of my medical stats', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
        {
          id: 2, admin_id: 1, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
        {
          id: 3, admin_id: 1, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
        {
          id: 7, admin_id: 1, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
        {
          id: 4, admin_id: 1, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
        {
          id: 9, admin_id: 1, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
        {
          id: 8, admin_id: 1, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
        {
          id: 5, admin_id: 1, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
        {
          id: 6, admin_id: 1, problem_title: '', problem_description: '', problem_category: '', date_created: '', created_by: ''
        },
      ]));
};
