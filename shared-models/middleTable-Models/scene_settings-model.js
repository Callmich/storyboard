const dB = require("../../data/dbConfig.js");

module.exports = {
  find,
  findById,
  findByStoryId,
};

function find() {
  return dB("scene_settings as ss")
    .join("scenes as sc", "ss.scene_id", "sc.scene_id")
    .join("settings as se", "ss.setting_id", "se.setting_id")
    .select(
      "ss.scene_setting_id",
      "sc.scene_name",
      "sc.story_id",
      "se.setting_name",
      "sc.scene_number",
      "se.project_id"
    );
}

function findById(scene_setting_id) {
  return dB("scene_settings as ss")
    .where({ scene_setting_id })
    .first()
    .join("scenes as sc", "ss.scene_id", "sc.scene_id")
    .join("settings as se", "ss.setting_id", "se.setting_id")
    .select(
      "ss.scene_setting_id",
      "sc.scene_name",
      "sc.story_id",
      "se.setting_name",
      "sc.scene_number",
      "se.project_id"
    );
}

function findByStoryId(story_id) {
  let stry_id = story_id;
  return dB("scene_settings as ss")
    .join("scenes as sc", "ss.scene_id", "sc.scene_id")
    .join("settings as se", "ss.setting_id", "se.setting_id")
    .select(
      "ss.scene_setting_id",
      "sc.scene_name",
      "sc.story_id as stry_id",
      "se.setting_name",
      "sc.scene_number",
      "se.project_id"
    )
    .where({ stry_id });
}
