const dB = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    findByProjectId
}

function find(){
  return dB('scene_characters as sc')
    .join('scenes as s', 'sc.scene_id', 's.scene_id')
    .join('characters as c', 'sc.character_id', 'c.character_id')
    .select('sc.scene_character_id', 'c.character_name', 's.scene_name', 'sc.scene_character_pov_changes', 'c.project_id')
}

function findById(id){
  return dB('scene_characters as sc')
    .where({ id })
    .first()
    .join('scenes as s', 'sc.scene_id', 's.scene_id')
    .join('characters as c', 'sc.character_id', 'c.character_id')
    .select('sc.scene_character_id', 'c.character_name', 's.scene_name', 'sc.scene_character_pov_changes', 'c.project_id')
}

function findByProjectId(project_id){
  return dB('scene_characters as sc')
    .join('scenes as s', 'sc.scene_id', 's.scene_id')
    .join('characters as c', 'sc.character_id', 'c.character_id')
    .where({ project_id })
    .select('sc.scene_character_id', 'c.character_name', 's.scene_name', 'sc.scene_character_pov_changes', 'c.project_id')
}