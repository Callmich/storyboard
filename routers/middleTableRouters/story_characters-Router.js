const express = require('express');

const SharedFunc = require('../../shared-models/shared-models.js')
const StoryCharacter = require('../../shared-models/middleTable-Models/story_characters-model.js')

const router = express.Router();


router.post("/", (req, res) => {
    const storyCharData = req.body;

    SharedFunc.add('story_characters', storyCharData)
      .then(item => {
        res.status(201).json(item)
      })
      .catch(error => {
          res.status(500).json({message: `Failed to create link for Story and Character ${error}`})
      })
})


module.exports = router;