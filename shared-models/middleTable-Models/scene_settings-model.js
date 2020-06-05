const dB = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    findByProjectId
}

function find(){
  return dB('scene_settings as ss')
    .join('scenes as sc', 'ss.scene_id', 'sc.scene_id')
    .join('settings as se', 'ss.setting_id', 'se.setting_id')
    .select('ss.scene_setting_id', 'sc.scene_name', 'se.setting_name', 'se.project_id')
}

function findById(id){
  return dB('scene_settings as ss')
    .where({ id })
    .first()
    .join('scenes as sc', 'ss.scene_id', 'sc.scene_id')
    .join('settings as se', 'ss.setting_id', 'se.setting_id')
    .select('ss.scene_setting_id', 'sc.scene_name', 'se.setting_name', 'se.project_id')
}

function findByProjectId(project_id){
  return dB('scene_settings as ss')
    .join('scenes as sc', 'ss.scene_id', 'sc.scene_id')
    .join('settings as se', 'ss.setting_id', 'se.setting_id')
    .where({ project_id })
    .select('ss.scene_setting_id', 'sc.scene_name', 'se.setting_name', 'se.project_id')
}