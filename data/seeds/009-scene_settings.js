exports.seed = (knex, Promise) => {
  return knex('scene_settings').truncate()
  .then(function (){
    return knex('scene_settings').insert([
      {
        scene_id: 2,
        setting_id: 1
      },
      {
        scene_id: 3,
        setting_id: 1
      },
      {
        scene_id: 4,
        setting_id: 1
      },
      {
        scene_id: 5,
        setting_id: 2
      },
      {
        scene_id: 7,
        setting_id: 3
      },
      {
        scene_id: 8,
        setting_id: 4
      },
      {
        scene_id: 19,
        setting_id: 4
      },
      {
        scene_id: 9,
        setting_id: 5
      },
      {
        scene_id: 9,
        setting_id: 3
      },
      {
        scene_id: 10,
        setting_id: 6
      },
      {
        scene_id: 11,
        setting_id: 7
      },
      {
        scene_id: 12,
        setting_id: 11
      },
      {
        scene_id: 13,
        setting_id: 9
      },
      {
        scene_id: 14,
        setting_id: 11
      },
      {
        scene_id: 15,
        setting_id: 7
      },
      {
        scene_id: 16,
        setting_id: 7
      },
      {
        scene_id: 17,
        setting_id: 11
      },
      {
        scene_id: 18,
        setting_id: 8
      },
  ])
  })
}