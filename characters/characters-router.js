const express = require('express');

const Characters = require('./characters-model');

const router = express.Router();

//CRUD ACTIONS go here and will start with /api/characters

router.get('/', (req, res) => {
    Characters.findCharacters()
      .then(characters => {
          res.status(200).json(characters)
      })
      .catch(error =>{
          res.status(500).json({ message: "Failed to get characters from server"})
      })
})

router.get('/:id', (req, res) => {
    const {id} =req.params

    Characters.findCharacterById(id)
      .then(char => {
        res.status(200).json(char)
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({ message: "Failed to get character from server"})
      })
})

router.post("/", (req, res) => {
    const charData = req.body;

    Characters.addCharacter(charData)
      .then(newChar => {
          res.status(201).json(newChar)
      })
      .catch(error => {
          res.status(500).json({message: `Failed to Create a new Project ${error.message}`})
      })
})

module.exports = router;