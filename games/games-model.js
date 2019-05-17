const db = require("../data/dbConfig.js");

module.exports = {
  find,
  create
};

async function find() {
  return db("games");
}

async function create(game) {
  const [id] = await db("games").insert(game, "id");

  return db("games")
    .where({ id })
    .first();
}
