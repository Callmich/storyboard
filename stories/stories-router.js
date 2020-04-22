const express = require('express');

const Stories = require('./stories-model.js');

const router = express.Router();

//CRUD ACTIONS go gere will start with /api/stories
router.get('/', (req, res) => {
    Stories.findStories()
      .then(stories => {
          res.status(200).json(stories)
      })
      .catch(error =>{
          res.status(500).json({ message: "Failed to get stories from server"})
      })
})

router.post("/", (req, res) => {
    const storyData = req.body;

    Stories.addStory(storyData)
      .then(story => {
          res.status(201).json(story)
      })
      .catch(error => {
          res.status(500).json({message: `Failed to Create a new Project ${error.message}`})
      })
})

module.exports = router;