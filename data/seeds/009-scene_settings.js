exports.seed = (knex, Promise) => {
  return knex("scene_settings")
    .then(function () {
      return knex("scene_settings").insert([
        {
          scene_id: 2,
          setting_id: 1,
          scene_setting_combo: "2,1,1", // sceneId,settingId,projectId
        },
        {
          scene_id: 3,
          setting_id: 1,
          scene_setting_combo: "3,1,1",
        },
        {
          scene_id: 4,
          setting_id: 1,
          scene_setting_combo: "4,1,1",
        },
        {
          scene_id: 5,
          setting_id: 2,
          scene_setting_combo: "5,2,1",
        },
        {
          scene_id: 7,
          setting_id: 3,
          scene_setting_combo: "7,3,1",
        },
        {
          scene_id: 8,
          setting_id: 4,
          scene_setting_combo: "8,4,1",
        },
        {
          scene_id: 19,
          setting_id: 4,
          scene_setting_combo: "19,4,1",
        },
        {
          scene_id: 9,
          setting_id: 5,
          scene_setting_combo: "9,5,1",
        },
        {
          scene_id: 9,
          setting_id: 3,
          scene_setting_combo: "9,3,1",
        },
        {
          scene_id: 10,
          setting_id: 6,
          scene_setting_combo: "10,6,2",
        },
        {
          scene_id: 11,
          setting_id: 7,
          scene_setting_combo: "11,7,2",
        },
        {
          scene_id: 12,
          setting_id: 11,
          scene_setting_combo: "12,11,2",
        },
        {
          scene_id: 13,
          setting_id: 9,
          scene_setting_combo: "13,9,2",
        },
        {
          scene_id: 14,
          setting_id: 11,
          scene_setting_combo: "14,11,2",
        },
        {
          scene_id: 15,
          setting_id: 7,
          scene_setting_combo: "15,7,2",
        },
        {
          scene_id: 16,
          setting_id: 7,
          scene_setting_combo: "16,7,2",
        },
        {
          scene_id: 17,
          setting_id: 11,
          scene_setting_combo: "17,11,2",
        },
        {
          scene_id: 18,
          setting_id: 8,
          scene_setting_combo: "18,8,2",
        },
      ]);
    });
};
