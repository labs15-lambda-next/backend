exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('problems').del()
    .then(() =>
    // Inserts seed entries
      // eslint-disable-next-line implicit-arrow-linebreak
      knex('problems').insert([
        {
          id: 1, admin_id: 1, problem_title: 'Ieed to keep track of my medical stats', problem_description: 'Medical stats.....', problem_category: 'Health', date_created: '2019', created_by: 'Joe'
        },
        {
          id: 2, admin_id: 1, problem_title: 'How do I tie my toes?', problem_description: 'Im just trying to them my toes', problem_category: 'Personal', date_created: '2015', created_by: 'Bob'
        },
        {
          id: 3, admin_id: 1, problem_title: 'Fasting Tracker', problem_description: 'Fasting tracker with a community behind it.. now that would be cool', problem_category: 'Health', date_created: '2019', created_by: 'Al'
        },
        {
          id: 7, admin_id: 2, problem_title: 'Mouse Traps App', problem_description: 'Make a smart mouse trap so we can get rid of them mice and also track where we placed the traps!', problem_category: 'Technology', date_created: '2018', created_by: 'John'
        },
        {
          id: 4, admin_id: 2, problem_title: 'Strength Help', problem_description: 'I just want to get stronger', problem_category: 'Fitness', date_created: '2017', created_by: 'Jake'
        },
        {
          id: 9, admin_id: 2, problem_title: 'Business', problem_description: 'I want to be able to track my business finances', problem_category: 'Finance', date_created: '2017', created_by: 'Darius'
        },
        {
          id: 8, admin_id: 3, problem_title: 'Fit Help!', problem_description: 'I want to be able to track all my food', problem_category: 'Fitness', date_created: '2019', created_by: 'Pol'
        },
        {
          id: 5, admin_id: 3, problem_title: 'Quick Maths App', problem_description: 'Just need some maths calculated quickly and free', problem_category: 'Technology', date_created: '2015', created_by: 'Zeke'
        },
        {
          id: 6, admin_id: 3, problem_title: 'House Watcher App', problem_description: 'Find trust worthy house sitters', problem_category: 'Technology', date_created: '2018', created_by: 'Dan'
        },
      ]));
};
