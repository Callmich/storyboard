const express = require('express');

const Projects = require('./project-model.js');
const Stories = require('../stories/stories-model.js')

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
      .then(projects => {
          res.status(200).json(projects)
      })
      .catch(error =>{
          res.status(500).json({ message: "Failed to get projects from server"})
      })
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    Projects.findById(id)
      .then(project => {
          if (project) {
            Stories.findByProjectId(id)
              .then( stories =>{
                res.status(200).json(stories)
              })
              .catch(error => {
                console.log(error)
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

    Projects.add(projectData)
      .then(project => {
          res.status(201).json(project)
      })
      .catch(error => {
          res.status(500).json({message: `Failed to Create a new Project ${error.message}`})
      })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Projects.findById(id)
      .then(project => {
          if (project) {
              Projects.update(changes, id)
                .then(updatedProject => {
                    res.status(200).json(updatedProject)
                })
          } else {
            res.status(404).json({ message: `Could not find project with id ${id}` });
          }
      })
      .catch(error => {
        res.status(500).json({error: `Failed to update project ${error.message}`})
      })
})

router.delete('/:id', (req, res) =>{
    const { id } = req.params;

    Projects.remove(id)
      .then(deleted => {
          if (deleted) {
              res.json({removed: deleted})
          } else {
              res.status(404).json({error: `Could not find a project with id ${id}`})
          }
      })
      .catch(error => {
          res.status(500).json({error: `Server unable to delete project with id ${id} Error: ${error}`})
      })
})





module.exports = router;