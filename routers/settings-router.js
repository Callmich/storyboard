const express = require('express');

const SharedFunc = require('../shared-models/shared-models.js')

const router = express.Router();

//CRUD ACTIONS go here and will start with /api/settings

router.get('/', (req, res) => {
    SharedFunc.findAll('settings')
      .then(settings => {
        if(settings.length == 0){
          res.status(200).json({message: `There are currently no settings created.`})
        }else{
          res.status(200).json(settings)
        }
      })
      .catch(error => {
          res.status(500).json({ message: `Failed to get settings from server - Error: ${error}`})
      })
})

router.get('/:id', (req, res) => {
  const {id} = req.params
  SharedFunc.findById('settings', id)
    .then(set => {
      if(set){
        res.status(200).json(set)
      }else{
        res.status(404).json({message: `Could not find setting with if ${id}`})
      }
    })
    .catch(error => {
      res.status(500).json({message: `Server error while pulling setting - Error: ${error}`})
    })
})

router.post('/', (req, res) => {
  const settingData = req.body

  SharedFunc.add('settings', settingData)
    .then(newSet => {
      res.status(201).json(newSet)
    })
    .catch(error => {
      res.status(500).json({message: `Failed to create a new setting - Error: ${error}`})
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    SharedFunc.findById('settings', id)
      .then(set => {
        if(set){
          SharedFunc.update('settings', id, changes)
            .then(updatedSet => {
              res.status(200).json(updatedSet)
            })
            .catch(error => {
              res.status(404).json({message: `Error updating setting - please confirm the correct info is being sent ${error}`})
            })
        } else{
          res.status(404).json({ message: `Could not find setting with id ${id}`});
        }
      })
      .catch(error => {
        res.status(500).json({error: `Failed to update setting ${error}`})
      })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  SharedFunc.remove('settings', id)
    .then(deleted => {
      if (deleted){
        res.status(200).json({removed: deleted})
      }else{
        res.status(404).json({error: `Could not find a setting with id ${id}`})
      }
    })
    .catch(error => {
      res.status(500).json({error: `Server unable to delete setting with id ${id} - Error: ${error}`})
    })
})

module.exports = router;