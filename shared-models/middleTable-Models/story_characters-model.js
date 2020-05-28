const dB = require('../../data/dbConfig.js')

module.exports = {
    find
}

function find(){
  return dB('story_characters as sc')
    .join('characters as c', 'sc.character_id', 'c.id')
    .join('stories as s', 'sc.story_id', 's.id')
    .select('sc.id as story_character_id','sc.pov_changes', 's.name as story_name', 's.id as story_id', 'c.name as character_name', 'c.id as character_id')
}