exports.seed = (knex, Promise) => {
  return knex("character_settings")
    .then(function () {
      return knex("character_settings").insert([
        {
          character_id: 1,
          setting_id: 1,
          character_setting_combo: "1,1,1", // characterId,settingId,projectId
        },
        {
          character_id: 1,
          setting_id: 2,
          character_setting_combo: "1,2,1",
        },
        {
          character_id: 1,
          setting_id: 4,
          character_setting_combo: "1,4,1",
        },
        {
          character_id: 2,
          setting_id: 1,
          character_setting_combo: "2,1,1",
        },
        {
          character_id: 2,
          setting_id: 2,
          character_setting_combo: "2,2,1",
        },
        {
          character_id: 2,
          setting_id: 4,
          character_setting_combo: "2,4,1",
        },
        {
          character_id: 3,
          setting_id: 1,
          character_setting_combo: "3,1,1",
        },
        {
          character_id: 3,
          setting_id: 4,
          character_setting_combo: "3,4,1",
        },
        {
          character_id: 4,
          setting_id: 1,
          character_setting_combo: "4,1,1",
        },
        {
          character_id: 4,
          setting_id: 4,
          character_setting_combo: "4,4,1",
        },
        {
          character_id: 5,
          setting_id: 1,
          character_setting_combo: "5,1,1",
        },
        {
          character_id: 13,
          setting_id: 1,
          character_setting_combo: "13,1,1",
        },
        {
          character_id: 17,
          setting_id: 3,
          character_setting_combo: "17,3,1",
        },
        {
          character_id: 17,
          setting_id: 5,
          character_setting_combo: "17,5,1",
        },
        {
          character_id: 18,
          setting_id: 5,
          character_setting_combo: "18,5,1",
        },
        {
          character_id: 19,
          setting_id: 3,
          character_setting_combo: "19,3,1",
        },
        {
          character_id: 19,
          setting_id: 4,
          character_setting_combo: "19,4,1",
        },
        {
          character_id: 6,
          setting_id: 6,
          character_setting_combo: "6,6,2",
        },
        {
          character_id: 6,
          setting_id: 7,
          character_setting_combo: "6,7,2",
        },
        {
          character_id: 6,
          setting_id: 11,
          character_setting_combo: "6,11,2",
        },
        {
          character_id: 7,
          setting_id: 6,
          character_setting_combo: "7,6,2",
        },
        {
          character_id: 7,
          setting_id: 7,
          character_setting_combo: "7,7,2",
        },
        {
          character_id: 7,
          setting_id: 11,
          character_setting_combo: "7,11,2",
        },
        {
          character_id: 9,
          setting_id: 6,
          character_setting_combo: "9,6,2",
        },
        {
          character_id: 9,
          setting_id: 7,
          character_setting_combo: "9,7,2",
        },
        {
          character_id: 9,
          setting_id: 11,
          character_setting_combo: "9,11,2",
        },
        {
          character_id: 8,
          setting_id: 6,
          character_setting_combo: "8,6,2",
        },
        {
          character_id: 8,
          setting_id: 7,
          character_setting_combo: "8,7,2",
        },
        {
          character_id: 10,
          setting_id: 6,
          character_setting_combo: "10,6,2",
        },
        {
          character_id: 10,
          setting_id: 7,
          character_setting_combo: "10,7,2",
        },
        {
          character_id: 11,
          setting_id: 6,
          character_setting_combo: "11,6,2",
        },
        {
          character_id: 11,
          setting_id: 7,
          character_setting_combo: "11,7,2",
        },
        {
          character_id: 12,
          setting_id: 6,
          character_setting_combo: "12,6,2",
        },
        {
          character_id: 12,
          setting_id: 7,
          character_setting_combo: "12,7,2",
        },
        {
          character_id: 16,
          setting_id: 6,
          character_setting_combo: "16,6,2",
        },
        {
          character_id: 16,
          setting_id: 11,
          character_setting_combo: "16,11,2",
        },
      ]);
    });
};
