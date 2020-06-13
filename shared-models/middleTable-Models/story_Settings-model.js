const dB = require("../../data/dbConfig.js");

module.exports = {
  find,
  findById,
  findByStoryId,
  findBySettingId,
};

function find() {
  return dB("story_settings as ss")
    .join("stories as st", "ss.story_id", "st.story_id")
    .join("settings as se", "ss.setting_id", "se.setting_id")
    .select(
      "ss.story_setting_id",
      "st.story_id",
      "st.story_name",
      "se.setting_id",
      "se.setting_name",
      "se.project_id"
    );
}

function findById(story_setting_id) {
  return dB("story_settings as ss")
    .where({ story_setting_id })
    .first()
    .join("stories as st", "ss.story_id", "st.story_id")
    .join("settings as se", "ss.setting_id", "se.setting_id")
    .select(
      "ss.story_setting_id",
      "st.story_id",
      "st.story_name",
      "se.setting_id",
      "se.setting_name",
      "se.project_id"
    );
}

function findByStoryId(story_id) {
  let stry_id = story_id;
  return dB("story_settings as ss")
    .join("stories as st", "ss.story_id", "st.story_id")
    .join("settings as se", "ss.setting_id", "se.setting_id")
    .select(
      "ss.story_setting_id",
      "st.story_id as stry_id",
      "st.story_name",
      "se.setting_id",
      "se.setting_name",
      "se.project_id"
    )
    .where({ stry_id });
}

function findBySettingId(setting_id) {
  let set_id = setting_id;
  return dB("story_settings as ss")
    .join("stories as st", "ss.story_id", "st.story_id")
    .join("settings as se", "ss.setting_id", "se.setting_id")
    .select(
      "ss.story_setting_id",
      "st.story_id",
      "st.story_name",
      "se.setting_id as set_id",
      "se.setting_name",
      "se.project_id"
    )
    .where({ set_id });
}
