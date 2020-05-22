const express = require('express');

const Characters = require('./characters-model');
const Stories = require('../stories/stories-model.js')

const router = express.Router();

//CRUD ACTIONS go here and will start with /api/characters

// router.get('/', (req, res) => {
//     Characters.findCharacters()
//       .then(characters => {
//           res.status(200).json(characters)
//       })
//       .catch(error =>{
//           res.status(500).json({ message: "Failed to get characters from server"})
//       })
// })

router.get('/', (req, res) => {
  Stories.findAll('characters')
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

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Characters.findCharacterById(id)
      .then(char => {
          if(char){
            Characters.updateCharacter(id, changes)
            .then(updatedChar => {
                res.status(200).json(updatedChar)
            })
            .catch(error => {
                console.log(error)
                res.status(404).json({message: "error updating Character - please confirm the correct info is being sent"})
                })
          } else {
            res.status(404).json({ message: `Could not find character with id ${id}`});
          }
      })
      .catch(error => {
        res.status(500).json({error: `Failed to update character ${error.message}`})
      })
})

router.delete('/:id', (req,res) => {
    const { id } = req.params

    Characters.removeCharacter(id)
      .then(deleted => {
          if(deleted){
            res.status(200).json({removed: deleted})
          } else {
            res.status(404).json({error: `could not find a character with id ${id}`})
          }
      })
      .catch(error => {
          res.status(500).json({error: `Server unable to delete character with id ${id} Error: ${error}`})
      })
})

module.exports = router;