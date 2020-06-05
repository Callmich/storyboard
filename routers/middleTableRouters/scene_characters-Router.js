const express = require('express');

const SharedFunc = require('../../shared-models/shared-models.js');
const SceneCharacter = require('../../shared-models/middleTable-Models/scene_characters-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  SceneCharacter.find()
    .then(sceneChars => {
      res.status(200).json(sceneChars)  
    })
    .catch(error => {
      res.status(500).json({ message: `failed to get scene_characters from server ${error}`})
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  SceneCharacter.findById(id)
    .then(sceneChar => {
      res.status(200).json(sceneChar)
    })
    .catch(error => {
      res.status(500).json({ message: `Failed to get scene_character from server - Error: ${error}`})
    })
})

router.get('/:id/project', (req, res) => {
  const { id } = req.params

  SharedFunc.findById('projects', id)
    .then(project => {
      if(project){
        SceneCharacter.findByProjectId(id)
        .then(sceneChars => {
          res.status(200).json(sceneChars)  
        })
        .catch(error => {
          res.status(500).json({ message: `Failed to get scene_characters by project id Error: ${error}` })
        })
      }else{
        res.status(404).json({ message: `Can not find a project with id ${id}` })
      }
    })
    .catch(error => {
        res.status(500).json({ message: `Failed to get scene_characters by project id - Error: ${error}` })
    })
})

router.post('/', (req, res) => {
    const sceneCharactersData = req.body

    SharedFunc.add('scene_characters', sceneCharactersData)
      .then(item => {
        res.status(201).json(item)
      })
      .catch(error => {
        res.status(500).json({ message: `Failed to create link for scene and character - Error: ${error}` })
      })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const changes = req.body

  SharedFunc.findById('scene_characters', id)
    .then(sceneChar => {
      if(sceneChar){
        SharedFunc.update('scene_characters', id, changes)
          .then(updatedItem => {
            res.status(200).json({updatedItem})
          })
          .catch(error => {
            res.status(500).json({ message: `Error updating the scene_characters with server - Error: ${error}`})
          })
      }else{
        res.status(404).json({ message: `Could not find connection between scene and character`})
      }
    })
    .catch(error => {
      res.status(500).json({error: `Failed to update scene_characters connection ${error}`})
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  SharedFunc.remove('scene_characters', id)
    .then(deleted => {
      if(deleted){
        res.status(200).json({removed: deleted})
      }else{
        res.status(404).json({error: `Could not find scene_character with id ${id}`})
      }
    })
    .catch(error => {
      res.status(500).json({ error: `Server unable to delete scene_character - Error: ${error}`})
    })
})

module.exports = router;