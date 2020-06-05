const express = require('express');

const SharedFunc = require('../../shared-models/shared-models.js');
const SceneSetting = require('../../shared-models/middleTable-Models/scene_settings-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  SceneSetting.find()
    .then(sceneSets => {
      res.status(200).json(sceneSets)
    })
    .catch(error => {
      res.status(500).json({ message: `failed to get scene_settings from server - Error: ${error}` })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  SceneSetting.findById(id)
    .then(sceneSet => {
      res.status(200).json(sceneSet)
    })
    .catch(error => {
      res.status(500).json({ message: `failed to get scene_setting from server - Error: ${error}` })
    })
})

router.get('/:id/project', (req, res) => {
  const { id } = req.params

  SharedFunc.findById('projects', id)
    .then(project => {
      if(project){
        SceneSetting.findByProjectId(id)
          .then(sceneSet => {
            res.status(200).json(sceneSet)
          })
          .catch(error => {
            res.status(500).json({message: `Failed to get scene_settings by project id Error: ${error}` })
          })
      }else{
        res.status(404).json({ message: `Can not find a project with id ${id}` })
      }
    })
    .catch(error => {
      res.status(500).json({ message: `Failed to get scene_settings by project id - Error: ${error}`})
    })
})

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