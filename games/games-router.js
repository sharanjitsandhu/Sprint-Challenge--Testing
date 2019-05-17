const express = require("express");

const db = require("./games-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const games = await db.find();
    if (games) {
      res.status(200).json(games);
    }
  } catch (error) {
    res.status(500).json({ message: `Games could not be found ${error}.` });
  }
});

router.post("/", async (req, res) => {
  const game = req.body;
  if (!game.title || !game.genre || !game.releaseYear) {
    res.status(422).json({ message: "422 Unprocessable Entity" });
  } else {
    try {
      const newgame = await db.create(game);
      if (newgame) {
        res.status(201).json(newgame);
      }
    } catch (error) {
      res.status(500).json({ message: `Could not be posted ${error}.` });
    }
  }
});

module.exports = router;
