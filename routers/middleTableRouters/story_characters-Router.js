const express = require('express');

const SharedFunc = require('../../shared-models/shared-models.js')
const StoryCharacter = require('../../shared-models/middleTable-Models/story_characters-model.js')

const router = express.Router();


router.post('/', (req, res) => {
    const storyCharData = req.body;

    SharedFunc.add('story_characters', storyCharData)
      .then(item => {
        res.status(201).json(item)
      })
      .catch(error => {
          res.status(500).json({message: `Failed to create link for Story and Character ${error}`})
      })
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  SharedFunc.findById('story_characters', id)
    .then(storyChar => {
      if(storyChar){
        SharedFunc.update('story_characters', id, changes)
        .then(updatedItem => {
            res.status(200).json(updatedItem)
          })
          .catch(error => {
            res.status(500).json({message: `Error updating the story_Characters connection with server Error: ${error}`})
          })
      }else{
        res.status(404).json({ message: `Could not find connection between character and Story`})
      }
    })
    .catch(error => {
      res.status(500).json({error: `Failed to update story_characters connection ${error}`})
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    SharedFunc.remove('story_characters', id)
      .then(deleted => {
        if(deleted){
          res.status(200).json({removed: deleted})
        }else{
          res.status(404).json({error: `Could not find story Characters with id ${id}`})
        }
      })
      .catch(error => {
          res.status(500).json({error: `Server unable to delete story_character Error: ${error}`})
      })
})


module.exports = router;