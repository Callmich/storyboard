const dB = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    findByProjectId
}

function find(){
  return dB('character_settings as cs')
    .join('characters as c', 'cs.character_id', 'c.character_id')
    .join('settings as s', 'cs.setting_id', 's.setting_id')
    .select('cs.charater_setting_id', 'c.character_name', 's.setting_name')
}

function findById(id){
  return dB('character_settings as cs')
    .where({ id })
    .first()
    .join('characters as c', 'cs.character_id', 'c.character_id')
    .join('settings as s', 'cs.setting_id', 's.setting_id')
    .select('cs.charater_setting_id', 'c.character_name', 's.setting_name')
}

function findByProjectId(project_id){
  return dB('character_settings as cs')
    .join('characters as c', 'cs.character_id', 'c.character_id')
    .join('settings as s', 'cs.setting_id', 's.setting_id')
    .where({ project_id })
    .select('cs.charater_setting_id', 'c.character_name', 's.setting_name')
}