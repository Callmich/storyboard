
module.exports = {
    addProjectCheck
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