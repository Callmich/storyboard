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
    .select('cs.character_setting_id', 'c.character_name', 's.setting_name')
}

function findById(character_setting_id){
  return dB('character_settings as cs')
    .where({ character_setting_id })
    .first()
    .join('characters as c', 'cs.character_id', 'c.character_id')
    .join('settings as s', 'cs.setting_id', 's.setting_id')
    .select('cs.character_setting_id', 'c.character_name', 's.setting_name', 'c.project_id')
}

// c.project_id renamed to pro_id to avoid ambiguous tables as both c & s have project_id
function findByProjectId(project_id){
  let pro_id = project_id
  return dB('character_settings as cs')
    .join('characters as c', 'cs.character_id', 'c.character_id')
    .join('settings as s', 'cs.setting_id', 's.setting_id')
    .select('cs.character_setting_id', 'c.character_name', 's.setting_name', 'c.project_id as pro_id')
    .where( {pro_id} )
}