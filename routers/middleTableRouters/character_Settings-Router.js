const express = require('express');

const SharedFunc = require('../../shared-models/shared-models.js');
const CharacterSetting = require('../../shared-models/middleTable-Models/character_settings-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  CharacterSetting.find()
    .then(charSets => {
      res.status(200).json(charSets)
    })
    .catch(error => {
      res.status(500).json({ message: `failed to get character_settings from server ${error}` })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  CharacterSetting.findById(id)
    .then(charSet => {
      res.status(200).json(charSet)
    })
    .catch(error => {
      res.status(500).json({ message: `failed to get story_character from server - Error: ${error}` })
    })
})

router.get('/:id/project', (req, res) => {
  const { id } = req.params

  SharedFunc.findById('projects', id)
    .then(project => {
      if(project){
        CharacterSetting.findByProjectId(id)
          .then(charSets => {
            res.status(200).json(charSets)
          })
          .catch(error => {
            res.status(500).json({ message: `Failed to get character_settings by project id Error: ${error}`})
          })
      }else{
        res.status(404).json({message: `Can not find a project with id ${id}`})
      }
    })
    .catch(error => {
      res.status(500).json({ message: `Failed to get character_settomgs by project id - Error: ${error}`})
    })
})

router.post('/', (req, res) => {
    const characterStoryData = req.body

    SharedFunc.add('character_settings', characterStoryData)
      .then(item => {
        res.status(201).json(item)
      })
      .catch(error => {
        res.status(500).json({ message: `Failed to create link for character and setting - Error: ${error}`})
      })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    SharedFunc.findById('character_settings', id)
      .then(charSet => {
        if(charSet){
          SharedFunc.update('character_settings', id, changes)
          .then(updatedItem => {
            res.status(200).json(updatedItem)
          })
          .catch(error => {
            res.status(500).json({ message: `Error updating the character_settings connection with server - Error: ${error}`})
          })
        }else{
         res.status(404).json({ message: `Could not find connection between character and setting`})
        }
      })
      .catch(error => {
        res.status(500).json({error: `Failed to update character_Settings connection ${error}`})
      })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  SharedFunc.remove('story_characters', id)
    .then(deleted => {
      if(deleted){
        res.status(200).json({removed: deleted})
      }else{
        res.status(404).json({error: `Could not find character_setting with id ${id}`})
      }
    })
    .catch(error => {
      res.status(500).json({error: `Server unable to delete character_setting - Error: ${error}`})
    })
})

module.exports = router;