const express = require('express');

const Settings = require('./settings-model.js');
const SharedFunc = require('../shared-models/shared-models.js')

const router = express.Router();

//CRUD ACTIONS go here and will start with /api/settings

router.get('/', (req, res) => {
    SharedFunc.findAll('settings')
      .then(settings => {
          res.status(200).json(settings)
      })
      .catch(error => {
          res.status(500).json({ message: "Failed to get settings from server"})
      })
})

router.get('/id', (req, res) => {
    const {id} = req.params
    SharedFunc.findById('settings', id)
      .then(set => {
          res.status(200).json(set)
      })
      .catch(error => {
          console.log(error)
          res.status(500).json({message: "Failed to get setting from server"})
      })
})

router.post('/', (req, res) => {
    const settingData = req.body

    SharedFunc.add('settings', settingData)
      .then(newSet => {
          res.status(201).json(newSet)
      })
      .catch(error => {
          res.status(500).json({message: `Failed to Create a new Project ${error.message}`})
      })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    SharedFunc.findById('settings', id)
      .then(set => {
          if(set){
            SharedFunc.update('settings', id, changes)
              .then(updatedSet => {
                  res.status(200).json(updatedSet)
              })
              .catch(error => {
                  console.log(error)
                  res.status(404).json({message: "error while updating setting - please confirm the correct info is being sent."})
              })
          } else{
            res.status(404).json({ message: `Could not find setting with id ${id}`});
          }
      })
      .catch(error => {
        res.status(500).json({error: `Failed to update setting ${error.message}`})
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
          res.status(500).json({error: `Server unable to delete setting with id ${id} Error: ${error}`})
      })
})

module.exports = router;