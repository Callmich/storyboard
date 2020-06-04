const express = require('express');

const SharedFunc = require('../../shared-models/shared-models.js');
const StorySetting = require('../../shared-models/middleTable-Models/story_Settings-model.js')

const router = express.Router();


router.post('/', (req, res) => {
    const storySettingData = req.body;

    SharedFunc.add('story_settings', storySettingData)
      .then(item => {
        res.status(201).json(item)
      })
      .catch(error => {
        res.status(500).json({message: `Failed to create link for Story and Setting - Error: ${error}`})
      })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    SharedFunc.findById('story_settings', id)
      .then(storySet => {
        if(storySet){
          SharedFunc.update('story_settings', id, changes)
            .then(updatedItem => {
              res.status(200).json(updatedItem)
            })
            .catch(error => {
              res.status(500).json({message: `Error updating the story_settings connection with server. Error: ${error}`})
            })
        }else{
          res.status(404).json({ message: `Could not find connection between character and setting`})
        }
      })
      .catch(error => {
        res.status(500).json({ error: `Failed to update story_settings connection ${error}`})
      })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    SharedFunc.remove('story_settings', id)
      .then(deleted => {
        if(deleted){
          res.status(200).json({removed: deleted})
        }else{
          res.status(200).json({error: `Could not find story_setting with id ${id}`})
        }
      })
      .catch(error => {
        res.status(500).json({error: `Server unable to delete story_settings Error: ${error}`})
      })
})

module.exports = router;