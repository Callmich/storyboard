
module.exports = {
    addProjectCheck,
    addStoryCheck,
    addCharacterCheck,
    addSettingCheck
}

// Check request to ensure it has required info for projects
function addProjectCheck(req, res, next){
  const { project_name } = req.body
  if(project_name){
    next()
  }else{
    res.status(400).json({ message: `Projects require a project_name`})
  }
}

function addStoryCheck(req, res, next){
  const { story_number, story_name, project_id } = req.body

  if(story_number && story_name && project_id){
    next()
  }else{
    res.status(400).json({ message: `Stories require a story_number, story_name, & project_id`})
  }
}

function addCharacterCheck(req, res, next){
  const { character_name, project_id } = req.body

  if(character_name && project_id){
    next()
  }else{
    res.status(400).json({ message: `Characters require a character_name & project_id`})
  }
}

function addSettingCheck(req, res, next){
  const { setting_name, project_id } = req.body

  if(setting_name && project_id){
    next()
  }else{
    res.status(400).json({ message: `Settings require a setting_name & project_id`})
  }
}