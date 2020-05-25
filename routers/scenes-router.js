const express = require('express');

const SharedFunc = require('../shared-models/shared-models.js');

const router = express.Router();

router.get('/', (req, res) => {
  SharedFunc.findAll('scenes')
    .then(scenes => {
      res.status(200).json(scenes)
    })
    .catch(error => {
      res.status(500).json({ message: `Failed to get scenes from Server. Error: ${error}`})
    })
})

router.get('/:id', (req, res) => {
  const {id} = req.params

  SharedFunc.findById('scenes', id)
    .then(scene => {
        res.status(200).json(scene)
    })
    .catch(error => {
        res.status(500).json(`Server error while pulling scene Error: ${error}`)
    }) 
})

router.post('/', (req, res) => {
    const sceneData = req.body;

    SharedFunc.add('scenes', sceneData)
      .then(scene => {
        res.status(201).json(scene)
      })
      .catch(error => {
          res.status(500).json({message: `Server Error - Filed to creare a new scene Error: ${error}`})
      })
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body

  SharedFunc.findById('scenes', id)
    .then(scene => {
      if (scene){
        SharedFunc.update('scenes', id, changes)
          .then(updatedScene => {
            res.status(200).json(updatedScene)
          })
          .catch(error => {
            res.status(500).json({message: `error updating scene- please confirm the correct info is being sent over. ${error}`})
          })
      }else{
        res.status(404).json({ message: `Could not find scene with id ${id}`})
      }
    })
    .catch(error => {
      res.status(500).json({error: `Failed to update scene. Error: ${error}`})
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  SharedFunc.remove('scenes', id)
    .then(deleted => {
      if (deleted){
        res.status(200).json({removed: deleted})
      } else {
        res.status(404).json({error: `Could not find a scene with id ${id}`})
      }
    })
    .catch(error => {
      res.status(500).json({ error: `Server unable to delete scene Error: ${error}`})
    })
})

module.exports = router;