const express = require("express");
const helmet = require("helmet");

const gamesRouter = require("../games/games-router.js");
const server = express();

server.use(helmet());
server.use(express.json());

server.use("/games", gamesRouter);

// sanity check route
server.get("/", (req, res) => {
  res.status(200).send("Testing - TDD Video Games");
});

module.exports = server;
