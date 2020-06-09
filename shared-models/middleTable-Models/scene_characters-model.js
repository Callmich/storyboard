const dB = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    findByCharacterId,
    findByProjectId
}

function find(){
  return dB('scene_characters as sc')
    .join('scenes as s', 'sc.scene_id', 's.scene_id')
    .join('characters as c', 'sc.character_id', 'c.character_id')
    .select('sc.scene_character_id', 'c.character_name', 's.scene_name', 's.scene_number', 'sc.scene_character_pov_changes', 'c.project_id')
}

function findById(scene_character_id){
  return dB('scene_characters as sc')
    .where({ scene_character_id })
    .first()
    .join('scenes as s', 'sc.scene_id', 's.scene_id')
    .join('characters as c', 'sc.character_id', 'c.character_id')
    .select('sc.scene_character_id', 'c.character_name', 's.scene_name', 's.scene_number', 'sc.scene_character_pov_changes', 'c.project_id')
}

// c.project_id renamed to avoid ambiguous column
function findByProjectId(project_id){
  let pro_id = project_id
  return dB('scene_characters as sc')
    .join('scenes as s', 'sc.scene_id', 's.scene_id')
    .join('characters as c', 'sc.character_id', 'c.character_id')
    .select('sc.scene_character_id', 'c.character_name', 's.scene_name', 's.scene_number', 'sc.scene_character_pov_changes', 'c.project_id as pro_id')
    .where({ pro_id })
}

// c.character_id renamed to avoid ambiguous column
function findByCharacterId(character_id){
  let char_id = character_id
  return dB('scene_characters as sc')
    .join('scenes as s', 'sc.scene_id', 's.scene_id')
    .join('characters as c', 'sc.character_id', 'c.character_id')
    .select('sc.scene_character_id', 'c.character_name', 's.scene_name', 's.scene_number', 'sc.scene_character_pov_changes', 'c.character_id as char_id')
    .where({ char_id })
}