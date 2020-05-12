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

module.exports = router;