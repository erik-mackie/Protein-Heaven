exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({
          id: 1,
          name: 'Silvia Bon',
          phone_number: 777 777 7777,
          access_level: 2
      }),
        knex('users').insert({
          id: 2,
          name: 'Mandy Fung',
          phone_number: 888 888 8888,
          access_level: 1
        }),

      ]);
    });
};
