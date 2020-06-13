exports.seed = (knex, Promise) => {
  return knex('character_settings').truncate()
  .then(function (){
    return knex('character_settings').insert([
      {
        character_id: 1,
        setting_id: 1 
      },
      {
        character_id: 1,
        setting_id: 2 
      },
      {
        character_id: 1,
        setting_id: 4 
      },
      {
        character_id: 2,
        setting_id: 1 
      },
      {
        character_id: 2,
        setting_id: 2 
      },
      {
        character_id: 2,
        setting_id: 4 
      },
      {
        character_id: 3,
        setting_id: 1 
      },
      {
        character_id: 3,
        setting_id: 4 
      },
      {
        character_id: 4,
        setting_id: 1 
      },
      {
        character_id: 4,
        setting_id: 4 
      },
      {
        character_id: 5,
        setting_id: 1 
      },
      {
        character_id: 13,
        setting_id: 1 
      },
      {
        character_id: 17,
        setting_id: 3 
      },
      {
        character_id: 17,
        setting_id: 5 
      },
      {
        character_id: 18,
        setting_id: 5 
      },
      {
        character_id: 19,
        setting_id: 3 
      },
      {
        character_id: 19,
        setting_id: 4 
      },
      {
        character_id: 6,
        setting_id: 6
      },
      {
        character_id: 6,
        setting_id: 7
      },
      {
        character_id: 6,
        setting_id: 11
      },
      {
        character_id: 7,
        setting_id: 6
      },
      {
        character_id: 7,
        setting_id: 7
      },
      {
        character_id: 7,
        setting_id: 11
      },
      {
        character_id: 9,
        setting_id: 6
      },
      {
        character_id: 9,
        setting_id: 7
      },
      {
        character_id: 9,
        setting_id: 11
      },
      {
        character_id: 8,
        setting_id: 6
      },
      {
        character_id: 8,
        setting_id: 7
      },
      {
        character_id: 10,
        setting_id: 6
      },
      {
        character_id: 10,
        setting_id: 7
      },
      {
        character_id: 11,
        setting_id: 6
      },
      {
        character_id: 11,
        setting_id: 7
      },
      {
        character_id: 12,
        setting_id: 6
      },
      {
        character_id: 12,
        setting_id: 7
      },
      {
        character_id: 16,
        setting_id: 6
      },
      {
        character_id: 16,
        setting_id: 11
      },
  ])
  })
}