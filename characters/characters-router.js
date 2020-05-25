const express = require('express');

const SharedFunc = require('../shared-models/shared-models.js')

const router = express.Router();

//CRUD ACTIONS go here and will start with /api/characters


router.get('/', (req, res) => {
  SharedFunc.findAll('characters')
    .then(characters => {
        res.status(200).json(characters)
    })
    .catch(error =>{
        res.status(500).json({ message: "Failed to get characters from server"})
    })
})

router.get('/:id', (req, res) => {
    const {id} =req.params

    SharedFunc.findById('characters', id)
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

    SharedFunc.add('characters', charData)
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

    SharedFunc.findById('characters', id)
      .then(char => {
          if(char){
            SharedFunc.update('characters', id, changes)
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

    SharedFunc.remove('characters', id)
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