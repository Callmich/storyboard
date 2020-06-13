const express = require("express");

const SharedFunc = require("../shared-models/shared-models.js");

const { addCharacterCheck } = require("../middleware/add.js");
const { updateCharacterCheck } = require("../middleware/update.js");

const router = express.Router();

//CRUD ACTIONS go here and will start with /api/characters

// Reads all characters across all projects
router.get("/", (req, res) => {
  SharedFunc.findAll("characters")
    .then((characters) => {
      if (characters.length == 0) {
        res
          .status(200)
          .json({ message: `There are currently no characters created.` });
      } else {
        res.status(200).json(characters);
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({
          message: `Failed to get characters from server - Error: ${error}`,
        });
    });
});

// Reads specific character with character_id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  SharedFunc.findById("characters", id)
    .then((char) => {
      if (char) {
        res.status(200).json(char);
      } else {
        res
          .status(404)
          .json({ message: `There Could not find character with id ${id}` });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Failed to get character from server" });
    });
});

// Creates character
router.post("/", addCharacterCheck, (req, res) => {
  const charData = req.body;

  SharedFunc.add("characters", charData)
    .then((newChar) => {
      res.status(201).json(newChar);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: `Failed to Create a new project -Error: ${error}` });
    });
});

// Updates specific character with character_id
router.put("/:id", updateCharacterCheck, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  SharedFunc.findById("characters", id)
    .then((char) => {
      if (char) {
        SharedFunc.update("characters", id, changes)
          .then((updatedChar) => {
            res.status(200).json(updatedChar);
          })
          .catch((error) => {
            res
              .status(500)
              .json({
                message: `error updating Character - please confirm the correct info is being sent - Error: ${error}`,
              });
          });
      } else {
        res
          .status(404)
          .json({ message: `Could not find character with id ${id}` });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: `Failed to update character - Error: ${error}` });
    });
});

// Destroys specific character with character_id
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  SharedFunc.remove("characters", id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ error: `could not find a character with id ${id}` });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: `Server unable to delete character - Error: ${error}` });
    });
});

module.exports = router;
