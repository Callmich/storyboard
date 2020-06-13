exports.seed = (knex, Promise) => {
  return knex('story_settings').truncate()
  .then(function (){
    return knex('story_settings').insert([
      {
        story_id: 1,
        setting_id: 1,
        story_setting_combo: "1,1,1" // storyId,settingId,projectId
      },
      {
        story_id: 1,
        setting_id: 2,
        story_setting_combo: "1,2,1"
      },
      {
        story_id: 2,
        setting_id: 3,
        story_setting_combo: "2,3,1"
      },
      {
        story_id: 2,
        setting_id: 4,
        story_setting_combo: "2,4,1"
      },
      {
        story_id: 2,
        setting_id: 5,
        story_setting_combo: "2,5,1"
      },
      {
        story_id: 3,
        setting_id: 2,
        story_setting_combo: "3,2,1"
      },
      {
        story_id: 4,
        setting_id: 6,
        story_setting_combo: "4,6,2"
      },
      {
        story_id: 4,
        setting_id: 7,
        story_setting_combo: "4,7,2"
      },
      {
        story_id: 4,
        setting_id: 8,
        story_setting_combo: "4,8,2"
      },
      {
        story_id: 4,
        setting_id: 11,
        story_setting_combo: "4,11,2"
      },
      {
        story_id: 5,
        setting_id: 7,
        story_setting_combo: "5,7,2"
      },
      {
        story_id: 5,
        setting_id: 9,
        story_setting_combo: "5,9,2"
      },
      {
        story_id: 5,
        setting_id: 10,
        story_setting_combo: "5,10,2"
      },
      {
        story_id: 5,
        setting_id: 11,
        story_setting_combo: "5,11,2"
      },
      {
        story_id: 6,
        setting_id: 6,
        story_setting_combo: "6,6,2"
      },
      {
        story_id: 6,
        setting_id: 7,
        story_setting_combo: "6,7,2"
      },
      {
        story_id: 6,
        setting_id: 8,
        story_setting_combo: "6,8,2"
      },
      {
        story_id: 6,
        setting_id: 11,
        story_setting_combo: "6,11,2"
      },
      {
        story_id: 7,
        setting_id: 6,
        story_setting_combo: "7,6,2"
      }
  ])
  })
}