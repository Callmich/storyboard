
module.exports = {
    addProjectCheck,
    addStoryCheck
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