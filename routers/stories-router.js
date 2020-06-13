const express = require("express");
const SharedFunc = require("../shared-models/shared-models.js");

const { addStoryCheck } = require("../middleware/add.js");
const { updateStoryCheck } = require("../middleware/update.js");

const router = express.Router();

//CRUD ACTIONS go gere will start with /api/stories

// Reads all stories accross all projects
router.get("/", (req, res) => {
  SharedFunc.findAll("stories")
    .then((stories) => {
      if (stories.length == 0) {
        res
          .status(200)
          .json({ message: `There are currently no stories created.` });
      } else {
        res.status(200).json(stories);
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({
          message: `Failed to get stories from server - Error: ${error}`,
        });
    });
});

// Reads specific story with story_id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  SharedFunc.findById("stories", id)
    .then((story) => {
      if (story) {
        res.status(200).json(story);
      } else {
        res.status(404).json({ message: `Could not find story with id ${id}` });
      }
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ message: `Failed to get story from server - Error: ${error}` });
    });
});

// Reads all scenes for a specific story with story_id
router.get("/:id/scenes", (req, res) => {
  const { id } = req.params;

  SharedFunc.findById("stories", id)
    .then((story) => {
      if (story) {
        SharedFunc.findByStoryId("scenes", id)
          .then((scenes) => {
            if (scenes.length == 0) {
              res
                .status(200)
                .json({
                  message: `There are currently no scenes created for this story`,
                });
            } else {
              res.status(200).json(scenes);
            }
          })
          .catch((error) => {
            res
              .status(500)
              .json({
                message: `Failed to get scenes from server - Error: ${error}`,
              });
          });
      } else {
        res.status(404).json({ message: `Can not find story with id ${id}` });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({
          message: `Server error: Failed to find story - Error: ${error}`,
        });
    });
});

// Creates story
router.post("/", addStoryCheck, (req, res) => {
  const storyData = req.body;

  SharedFunc.add("stories", storyData)
    .then((story) => {
      res.status(201).json(story);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: `Failed to Create a new Project ${error.message}` });
    });
});

// Updates specific story with story_id
router.put("/:id", updateStoryCheck, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  SharedFunc.findById("stories", id)
    .then((story) => {
      if (story) {
        SharedFunc.update("stories", id, changes)
          .then((updatedStory) => {
            res.status(200).json(updatedStory);
          })
          .catch((error) => {
            console.log(error);
            res
              .status(404)
              .json({
                message:
                  "error updating story - please confirm the correct info is being sent",
              });
          });
      } else {
        res.status(404).json({ message: `Could not find story with id ${id}` });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: `Failed to update project ${error.message}` });
    });
});

// Destroys specific story with story_id
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  SharedFunc.remove("stories", id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res.status(404).json({ error: `could not find a story with id ${id}` });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({
          error: `Server unable to delete story with id ${id} Error: ${error}`,
        });
    });
});

module.exports = router;
