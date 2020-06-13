exports.seed = (knex, Promise) => {
  return knex('story_settings').truncate()
  .then(function (){
    return knex('story_settings').insert([
      {
        story_id: 1,
        setting_id: 1
      },
      {
        story_id: 1,
        setting_id: 2
      },
      {
        story_id: 2,
        setting_id: 3
      },
      {
        story_id: 2,
        setting_id: 4
      },
      {
        story_id: 2,
        setting_id: 5
      },
      {
        story_id: 3,
        setting_id: 2
      },
      {
        story_id: 4,
        setting_id: 6
      },
      {
        story_id: 4,
        setting_id: 7
      },
      {
        story_id: 4,
        setting_id: 8
      },
      {
        story_id: 4,
        setting_id: 11
      },
      {
        story_id: 5,
        setting_id: 7
      },
      {
        story_id: 5,
        setting_id: 9
      },
      {
        story_id: 5,
        setting_id: 10
      },
      {
        story_id: 5,
        setting_id: 11
      },
      {
        story_id: 6,
        setting_id: 6
      },
      {
        story_id: 6,
        setting_id: 7
      },
      {
        story_id: 6,
        setting_id: 8
      },
      {
        story_id: 6,
        setting_id: 11
      },
      {
        story_id: 7,
        setting_id: 6
      }
  ])
  })
}