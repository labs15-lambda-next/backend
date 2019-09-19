exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('problems').del()
    .then(() =>
    // Inserts seed entries
      // eslint-disable-next-line implicit-arrow-linebreak
      knex('problems').insert([
        {
          id: 1, problem_title: 'Ieed to keep track of my medical stats', problem_description: 'Medical stats.....', problem_category: 'Health', date_created: '2019', created_by: 'Joe',rating: 5, numOfRatings: 10, isApproved: false
        },
        {
          id: 2, problem_title: 'How do I tie my toes?', problem_description: 'Im just trying to them my toes', problem_category: 'Personal', date_created: '2015', created_by: 'Bob',rating: 4, numOfRatings: 10, isApproved: false
        },
        {
          id: 3, problem_title: 'Fasting Tracker', problem_description: 'Fasting tracker with a community behind it.. now that would be cool', problem_category: 'Fitness', date_created: '2019', created_by: 'Al',rating: 3, numOfRatings: 2, isApproved: false
        },
        {
          id: 7, problem_title: 'Mouse Traps App', problem_description: 'Make a smart mouse trap so we can get rid of them mice and also track where we placed the traps!', problem_category: 'Technology', date_created: '2018', created_by: 'John',rating: 3, numOfRatings: 2, isApproved: false
        },
        {
          id: 4, problem_title: 'Strength Help', problem_description: 'I just want to get stronger', problem_category: 'Personal', date_created: '2017', created_by: 'Jake',rating: 1, numOfRatings: 1, isApproved: false
        },
        {
          id: 9, problem_title: 'Business', problem_description: 'I want to be able to track my business finances', problem_category: 'Finance', date_created: '2017', created_by: 'Darius',rating: 2, numOfRatings: 10, isApproved: false
        },
        {
          id: 8, problem_title: 'Fit Help!', problem_description: 'I want to be able to track all my food', problem_category: 'Health', date_created: '2019', created_by: 'Pol',rating: 4, numOfRatings: 40, isApproved: false
        },
        {
          id: 5, problem_title: 'Quick Maths App', problem_description: 'Just need some maths calculated quickly and free', problem_category: 'Science', date_created: '2015', created_by: 'Zeke',rating: 4, numOfRatings: 30, isApproved: false
        },
        {
          id: 6, problem_title: 'House Watcher App', problem_description: 'Find trust worthy house sitters', problem_category: 'Technology', date_created: '2018', created_by: 'Dan',rating: 3, numOfRatings: 20, isApproved: true
        },
      ]));
};
