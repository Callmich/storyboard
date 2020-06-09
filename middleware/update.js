
module.exports = {
    updateProjectCheck
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