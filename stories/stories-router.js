const express = require('express');

const Stories = require('./stories-model.js');

const router = express.Router();

//CRUD ACTIONS go gere will start with /api/stories
router.get('/', (req, res) => {
    Stories.findStories()
      .then(stories => {
          res.status(200).json(stories)
      })
      .catch(error =>{
          res.status(500).json({ message: "Failed to get stories from server"})
      })
})

router.get('/:id', (req, res) => {
    const {id} =req.params

    Stories.findStoryById(id)
      .then(project => {
        res.status(200).json(project)
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({ message: "Failed to get story from server"})
      })
})

//Add GET for Scenes, Characters, and Settings

router.post("/", (req, res) => {
    const storyData = req.body;

    Stories.addStory(storyData)
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

    Stories.findStoryById(id)
      .then(story => {
          if(story){
            Stories.updateStory(id, changes)
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

    Stories.removeStory(id)
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