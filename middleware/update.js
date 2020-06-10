
module.exports = {
  updateProjectCheck,
  updateStoryCheck,
  updateCharacterCheck
  updateSettingCheck
}

// Check request to ensure it has required info for projects
function updateProjectCheck(req, res, next){
    const { project_name, project_summary, project_notes } = req.body

    if(project_name || project_summary || project_notes){
      next()
    }else{
      res.status(400).json({ message: `Project update must contain project_name, project_summary, or project_notes`})
    }
  }

function updateStoryCheck(req, res, check){
  const { story_number, story_name, project_id, story_summary, story_notes } = req.body

  if(story_number || story_name || project_id || story_summary || story_notes){
    next()
  }else{
    res.status(400).json({ message: `Story update must contain a story_number, story_name, project_id, story_summary, or story_notes`})
  }
}

function updateCharacterCheck(req, res, next){
  const { character_name, character_type, character_age, character_gender_identity, character_role, character_physical_desc, character_notes, character_status, project_id } = req.body

  if(character_name || character_type || character_age || character_gender_identity || character_role || character_physical_desc || character_notes || character_status ||project_id){
    next()
  }else{
    res.status(400).json({ message: `Characters require a character_name & project_id`})
  }
}

function updateSettingCheck(req, res, next){
  const { setting_name, setting_time, setting_desc, setting_background, setting_activities, project_id } = req.body

  if(setting_name || setting_time || setting_desc || setting_background || setting_activities || project_id){
    next()
  }else{
    res.status(400).json({ message: `Setting updates require a setting_name, setting_time, setting_desc, setting_background, setting_activities, or project_id`})
  }
}