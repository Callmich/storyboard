const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
      .then(projects => {
          res.status(200).json(projects)
      })
      .catch(error =>{
          res.status(500).json({ message: "Failed to get projects from server"})
      })
})