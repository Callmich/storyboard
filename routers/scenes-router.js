const express = require("express");

const SharedFunc = require("../shared-models/shared-models.js");

const { addSceneCheck } = require("../middleware/add.js");
const { updateSceneCheck } = require("../middleware/update.js");

const router = express.Router();

// CRUD actions will start with /api/scenes

// Reads all scenes across all projects & stories
router.get("/", (req, res) => {
  SharedFunc.findAll("scenes")
    .then((scenes) => {
      if (scenes.length == 0) {
        res
          .status(200)
          .json({ message: `There are currently no scenes created` });
      } else {
        res.status(200).json(scenes);
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({
          message: `Failed to get scenes from Server - Error: ${error}`,
        });
    });
});

// Reads specific scene with scene_id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  SharedFunc.findById("scenes", id)
    .then((scene) => {
      if (scene) {
        res.status(200).json(scene);
      } else {
        res.status(404).json({ message: `Could not find scene with id ${id}` });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json(`Server error while pulling scene - Error: ${error}`);
    });
});

// Creates scene
router.post("/", addSceneCheck, (req, res) => {
  const sceneData = req.body;

  SharedFunc.add("scenes", sceneData)
    .then((newScene) => {
      res.status(201).json(newScene);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: `Failed to create a new scene - Error: ${error}` });
    });
});

// Updates specific scene with scene_id
router.put("/:id", updateSceneCheck, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  SharedFunc.findById("scenes", id)
    .then((scene) => {
      if (scene) {
        SharedFunc.update("scenes", id, changes)
          .then((updatedScene) => {
            res.status(200).json(updatedScene);
          })
          .catch((error) => {
            res
              .status(500)
              .json({
                message: `Error updating scene - please confirm the correct info is being sent - Error: ${error}`,
              });
          });
      } else {
        res.status(404).json({ message: `Could not find scene with id ${id}` });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: `Failed to update scene - Error: ${error}` });
    });
});

// Destroys specific scene with scene_id
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  SharedFunc.remove("scenes", id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res.status(404).json({ error: `Could not find a scene with id ${id}` });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: `Server unable to delete scene - Error: ${error}` });
    });
});

module.exports = router;
