const dB = require('../../data/dbConfig.js')

module.exports = {
    find,
    findById,
    findByProjectId,
    test
}

function find(){
  return dB('story_characters as sc')
    .join('characters as c', 'sc.character_id', 'c.id')
    .join('stories as s', 'sc.story_id', 's.id')
    .select('sc.id as story_character_id','sc.pov_changes', 's.name as story_name', 's.id as story_id', 's.project_id as project_id', 'c.name as character_name', 'c.id as character_id')
}

function findById(id){
  return dB('story_characters as sc')
  .where({ id })
  .first()
  .join('characters as c', 'sc.character_id', 'c.id')
  .join('stories as s', 'sc.story_id', 's.id')
  .select('sc.id as story_character_id','sc.pov_changes', 's.name as story_name', 's.id as story_id', 's.project_id as project_id', 'c.name as character_name', 'c.id as character_id')
}

function findByProjectId(project_id){
return dB('story_characters as sc')
.join('characters as c', 'sc.character_id', 'c.id')
.join('stories as s', 'sc.story_id', 's.id')
.where({ project_id })
.select('sc.id as story_character_id','sc.pov_changes', 's.name as story_name', 's.id as story_id', 's.project_id as project_id', 'c.name as character_name', 'c.id as character_id')
} //check in postman