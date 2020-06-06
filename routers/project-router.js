const express = require('express');

const SharedFunc = require('../shared-models/shared-models.js')

const router = express.Router();

router.get('/', (req, res) => {
  SharedFunc.findAll('projects')
    .then(projects => {
      if(projects.length == 0){
        res.status(200).json({message: `There are currently no projects created.`})
      }else{
        res.status(200).json(projects)
      }
    })
    .catch(error =>{
        res.status(500).json({ message: `Failed to get projects from server - Error: ${error}`})
    })
})

router.get('/:id', (req, res) => {
  const {id} = req.params

  SharedFunc.findById('projects', id)
    .then(project => {
      if(project){
        res.status(200).json(project)
      }else{
        res.status(404).json({message: `Could not find project with id ${id}`})
      }
    })
    .catch(error => {
      res.status(500).json(`Server error while pulling project - Error: ${error}`)
    })
})

router.get('/:id/stories', (req, res) => {
    const { id } = req.params

    SharedFunc.findById('projects', id)
      .then(project => {
          if (project) {
            SharedFunc.findByProjectId('stories', id)
              .then( stories =>{
                if(stories.length == 0){
                  res.status(200).json({ message: `There are currently no stories created for this project`})
                }else{
                  res.status(200).json(stories)
                }
              })
              .catch(error => {
                console.log(error)
                res.status(500).json({ message: `Failed to get project from server*** - Error: ${error}`})
              })
          } else {
              res.status(404).json({message: `Can not find a project with id ${id}`})
          }
      })
      .catch(error =>{
        res.status(500).json({message: `Server error: Failed to find Project ${error}`})
      })
})

router.get('/:id/characters', (req, res) => {
  const { id } = req.params

  SharedFunc.findById('projects', id)
    .then(project => {
      if (project) {
        SharedFunc.findByProjectId('characters', id)
          .then( characters =>{
            if(characters.length == 0){
              res.status(200).json({message: `There are currently no characters created for this project`})
            }else{
              res.status(200).json(characters)
            }
          })
          .catch(error => {
            res.status(500).json({ message: `Failed to get project from server - Error: ${error}`})
          })
      } else {
          res.status(404).json(`Can not find a project with id ${id}`)
      }
    })
    .catch(error =>{
      res.status(500).json({message: `Server error: Failed to find Project ${error}`})
    })
})

router.get('/:id/settings', (req, res) => {
  const { id } = req.params

  SharedFunc.findById('projects', id)
    .then(project => {
      if (project) {
        SharedFunc.findByProjectId('settings', id)
          .then( settings =>{
            if(settings.length == 0){
              res.status(200).json({message: `There are currently no settings created for this project`})
            }else{
              res.status(200).json(settings)
            }
          })
          .catch(error => {
            res.status(500).json({ message: `Failed to get settings from server - Error: ${error}`})
          })
      } else {
        res.status(404).json(`Can not find a project with id ${id}`)
      }
    })
    .catch(error =>{
      res.status(500).json({message: `Server error: Failed to find Project ${error}`})
    })
})

router.post("/", (req, res) => {
  const projectData = req.body;

  SharedFunc.add('projects', projectData)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(error => {
        res.status(500).json({message: `Failed to create a new Project ${error.message}`})
    })
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  SharedFunc.findById('projects', id)
    .then(project => {
      if (project) {
        SharedFunc.update('projects', id, changes)
          .then(updatedProject => {
            res.status(200).json(updatedProject)
          })
          .catch(error => {
            res.status(500).json({message: `error updating project - please confirm the correct info is being sent ${error}`})
          })
      } else {
        res.status(404).json({ message: `Could not find project with id ${id}` });
      }
      })
    .catch(error => {
      res.status(500).json({error: `Failed to update project ${error}`})
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  SharedFunc.remove('projects', id)
    .then(deleted => {
        if (deleted) {
            res.status(200).json({removed: deleted})
        } else {
            res.status(404).json({error: `Could not find a project with id ${id}`})
        }
    })
    .catch(error => {
      res.status(500).json({error: `Server unable to delete project with id ${id} - Error: ${error}`})
    })
})

module.exports = router;