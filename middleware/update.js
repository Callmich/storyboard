
module.exports = {
    updateProjectCheck,
    updateStoryCheck
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