const express = require('express');
const SharedFunc = require('../shared-models/shared-models.js')

const router = express.Router();

//CRUD ACTIONS go gere will start with /api/stories

router.get('/', (req, res) => {
  SharedFunc.findAll('stories')
    .then(stories => {
        res.status(200).json(stories)
    })
    .catch(error =>{
        res.status(500).json({ message: "Failed to get stories from server"})
    })
})

router.get('/:id', (req, res) => {
    const {id} =req.params

    SharedFunc.findById('stories', id)
      .then(project => {
        res.status(200).json(project)
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({ message: "Failed to get story from server"})
      })
})

router.post("/", (req, res) => {
    const storyData = req.body;

    SharedFunc.add('stories', storyData)
      .then(story => {
          res.status(201).json(story)
      })
      .catch(error => {
          res.status(500).json({message: `Failed to Create a new Project ${error.message}`})
      })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    SharedFunc.findById('stories', id)
      .then(story => {
          if(story){
            SharedFunc.update('stories', id, changes)
            .then(updatedStory => {
                res.status(200).json(updatedStory)
            })
            .catch(error => {
                console.log(error)
                res.status(404).json({message: "error updating story - please confirm the correct info is being sent"})
                })
          } else {
            res.status(404).json({ message: `Could not find story with id ${id}`});
          }
      })
      .catch(error => {
        res.status(500).json({error: `Failed to update project ${error.message}`})
      })
})

router.delete('/:id', (req,res) => {
    const { id } = req.params

    SharedFunc.remove('stories', id)
      .then(deleted => {
          if(deleted){
            res.status(200).json({removed: deleted})
          } else {
            res.status(404).json({error: `could not find a story with id ${id}`})
          }
      })
      .catch(error => {
          res.status(500).json({error: `Server unable to delete story with id ${id} Error: ${error}`})
      })
})

module.exports = router;