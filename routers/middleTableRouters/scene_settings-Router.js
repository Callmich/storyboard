const express = require('express');

const SharedFunc = require('../../shared-models/shared-models.js');
const SceneSetting = require('../../shared-models/middleTable-Models/scene_settings-model.js');

const router = express.Router();

// CRUD ACTIONS go here and will start with /api/sceneSettings

// Reads all scene_settings across all projects - shows items from that db as well as scenes and settings
router.get('/', (req, res) => {
  SceneSetting.find()
    .then(sceneSets => {
      res.status(200).json(sceneSets)
    })
    .catch(error => {
      res.status(500).json({ message: `failed to get scene_settings from server - Error: ${error}` })
    })
})

// Reads specific scene_settings based on scene_setting_id - shows items from that db as well as scenes and settings
router.get('/:id', (req, res) => {
  const { id } = req.params

  SceneSetting.findById(id)
    .then(sceneSet => {
      if(sceneSet){
        res.status(200).json(sceneSet)
      }else{
        res.status(404).json({ message: `Could not find an entry with scene_setting_id ${id}`})
      }
    })
    .catch(error => {
      res.status(500).json({ message: `failed to get scene_setting from server - Error: ${error}` })
    })
})

//Reads all scene_settings based on story_id - shows items from scene_settings db as well as scenes and settings
router.get('/:id/story', (req, res) => {
  const { id } = req.params

  SharedFunc.findById('stories', id)
    .then(story => {
      if(story){
        SceneSetting.findByStoryId(id)
          .then(sceneSets => {
            res.status(200).json(sceneSets)
          })
          .catch(error => {
            res.status(500).json({message: `Failed to get scene_settings by story id Error: ${error}` })
          })
      }else{
        res.status(404).json({ message: `Can not find a story with id ${id}` })
      }
    })
    .catch(error => {
      res.status(500).json({ message: `Failed to get scene_settings by project id - Error: ${error}`})
    })
})

// Creates a new scene_setting
router.post('/', (req, res) => {
    const sceneSettingData = req.body

    SharedFunc.add('scene_settings', sceneSettingData)
      .then(item => {
        res.status(201).json(item)
      })
      .catch(error => {
        res.status(500).json({ message: `Failed to create link for scene and setting - Error: ${error}`})
      })
})

// Updates specific scene_setting with scene_setting_id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    SharedFunc.findById('scene_settings', id)
      .then(sceneSet => {
        if(sceneSet){
          SharedFunc.update('scene_settings', id, changes)
          .then(updatedItem => {
            res.status(200).json(updatedItem)
          })
          .catch(error => {
            res.status(500).json({ message: `Error updating the scene_settings connection with server - Error: ${error}`})
          })
        }else{
         res.status(404).json({ message: `Could not find connection between scene and setting`})
        }
      })
      .catch(error => {
        res.status(500).json({error: `Failed to update scene_Settings connection ${error}`})
      })
})

// Destroys specific scene_setting with scene_setting_id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    SharedFunc.remove('scene_characters', id)
      .then(deleted => {
        if(deleted){
          res.status(200).json({removed: deleted})
        }else{
          res.status(404).json({error: `Could not find scene_setting with id ${id}`})
        }
      })
      .catch(error => {
        res.status(500).json({error: `Server unable to delete scene_setting - Error: ${error}`})
      })
  })

module.exports = router