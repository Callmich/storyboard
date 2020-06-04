const dB = require('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findByProjectId
};

function find(){
  return dB('story_settings as ss')
    .join('stories as st', 'ss.story_id', 'st.story_id')
    .join('settings as se', 'ss.setting_id', 'se.setting_id')
    .select('ss.story_setting_id', 'st.story_name', 'se.setting_name', 'se.project_id')
};

function findById(id){
  return dB('story_settings as ss')
    .where({ id })
    .first()
    .join('stories as st', 'ss.story_id', 'st.story_id')
    .join('settings as se', 'ss.setting_id', 'se.setting_id')
    .select('ss.story_setting_id', 'st.story_name', 'se.setting_name', 'se.project_id')
}

function findByProjectId(project_id){
    return dB('story_settings as ss')
      .join('stories as st', 'ss.story_id', 'st.story_id')
      .join('settings as se', 'ss.setting_id', 'se.setting_id')
      .where({ project_id })
      .select('ss.story_setting_id', 'st.story_name', 'se.setting_name', 'se.project_id')
}