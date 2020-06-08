const dB = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    findByStoryId,
    findByCharacterId
}


function find(){
  return dB('story_characters as sc')
    .join('characters as c', 'sc.character_id', 'c.character_id')
    .join('stories as s', 'sc.story_id', 's.story_id')
    .select('sc.story_character_id','sc.story_character_pov_changes', 's.story_name', 's.story_id', 's.project_id', 'c.character_name', 'c.character_id')
}

function findById(story_character_id){
  return dB('story_characters as sc')
  .where({ story_character_id })
  .first()
  .join('characters as c', 'sc.character_id', 'c.character_id')
  .join('stories as s', 'sc.story_id', 's.story_id')
  .select('sc.story_character_id','sc.story_character_pov_changes', 's.story_name', 's.story_id', 's.project_id', 'c.character_name', 'c.character_id')
}

function findByStoryId(story_id){
  let stry_id = story_id
  return dB('story_characters as sc')
    .join('characters as c', 'sc.character_id', 'c.character_id')
    .join('stories as s', 'sc.story_id', 's.story_id')
    .select('sc.story_character_id','sc.story_character_pov_changes', 's.story_name', 's.story_id as stry_id', 's.project_id', 'c.character_name', 'c.character_id')
    .where({stry_id })
} 

function findByCharacterId(character_id){
  let char_id = character_id
  return dB('story_characters as sc')
    .join('characters as c', 'sc.character_id', 'c.character_id')
    .join('stories as s', 'sc.story_id', 's.story_id')
    .select('sc.story_character_id','sc.story_character_pov_changes', 's.story_name', 's.story_id', 's.project_id', 'c.character_name', 'c.character_id as char_id')
    .where({ char_id })
} 