const express = require('express');

const SharedFunc = require('../../shared-models/shared-models.js')
const StoryCharacter = require('../../shared-models/middleTable-Models/story_characters-model.js')

const router = express.Router();

// CRUD ACTIONS go here and will start with /api/sceneSettings

// Reads all story_characters across all projects - shows items from that db as well as stories and characters
router.get('/', (req, res) => {
    StoryCharacter.find()
      .then(storyChars => {
        res.status(200).json(storyChars)
      })
      .catch(error => {
        res.status(500).json({ message: `failed to get story_characters from server ${error}`})
      })
})

// Reads specific story_character based on story_character_id - shows items from that db as well as stories and characters
router.get('/:id', (req, res) => {
  const { id } = req.params

  StoryCharacter.findById(id)
    .then(storyChar => {
      if(storyChar){
        res.status(200).json(storyChar)
      }else{
        res.status(404).json({ message: `Could not find an entry with story_character_id ${id}`})
      }
    })
    .catch(error => {
      res.status(500).json({message: `failed to get story_character from server - Error: ${error}`})
    })
})

// Reads all story_characters based on story_id - shows items from story_charadters dB as well as stories and characters
router.get('/:id/story', (req, res) => {
  const { id } = req.params

  SharedFunc.findById('stories', id)
    .then(story => {
      if (story) {
        StoryCharacter.findByStoryId(id)
          .then(storyChars => {
            res.status(200).json(storyChars)
          })
          .catch(error => {
            res.status(500).json({ message: `Failed to get story_characters by story id - Error: ${error}`})
          })
      }else{
        res.status(404).json({message: `Can not find a story with id ${id}`})
      }
    })
    .catch(error => {
      res.status(500).json({ message: `Failed to get story_characters by project id - Error: ${error}`})
    })
})

// Reads all story_characters based on character_id - shows items from story_charadters dB as well as stories and characters
router.get('/:id/character', (req, res) => {
  const { id } = req.params

  SharedFunc.findById('characters', id)
    .then(character=> {
      if (character) {
        StoryCharacter.findByCharacterId(id)
          .then(storyChars => {
            res.status(200).json(storyChars)
          })
          .catch(error => {
            res.status(500).json({ message: `Failed to get story_characters by character id - Error: ${error}`})
          })
      }else{
        res.status(404).json({message: `Can not find a character with id ${id}`})
      }
    })
    .catch(error => {
      res.status(500).json({ message: `Failed to get story_characters by story - Error: ${error}`})
    })
})

// Creates a new story_character
router.post('/', (req, res) => {
    const storyCharData = req.body;

    SharedFunc.add('story_characters', storyCharData)
      .then(item => {
        res.status(201).json(item)
      })
      .catch(error => {
          res.status(500).json({message: `Failed to create link for Story and Character - Error: ${error}`})
      })
})

// Updates a specific story_character with story_character_id
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

// Destroys a specific story_character with story_character_id
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    SharedFunc.remove('story_characters', id)
      .then(deleted => {
        if(deleted){
          res.status(200).json({removed: deleted})
        }else{
          res.status(404).json({error: `Could not find story_characters with id ${id}`})
        }
      })
      .catch(error => {
          res.status(500).json({error: `Server unable to delete story_character - Error: ${error}`})
      })
})


module.exports = router;