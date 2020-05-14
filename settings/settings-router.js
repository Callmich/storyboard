const express = require('express');

const Settings = require('./settings-model.js');

const router = express.Router();

//CRUD ACTIONS go here and will start with /api/settings

router.get('/', (req, res) => {
    Settings.findSettings()
      .then(settings => {
          res.status(200).json(settings)
      })
      .catch(error => {
          res.status(500).json({ message: "Failed to get settings from server"})
      })
})

router.get('/id', (req, res) => {
    const {id} = req.params
    Settings.findSettingById(id)
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

    Settings.addSetting(settingData)
      .then(newSet => {
          res.status(201).json(newSet)
      })
      .catch(error => {
          res.status(500).json({message: `Failed to Create a new Project ${error.message})
      })
})

module.exports = router;