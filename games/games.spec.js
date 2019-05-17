const db = require("../data/dbConfig.js");
const gamesModel = require("./games-model.js");

describe("create()", () => {
  it("Should create provided game", async () => {
    await gamesModel.create({
      title: "ABCDEFG",
      genre: "A",
      releaseYear: "1990"
    });

    const games = await db("games");

    expect(games).toHaveLength(8);
  });
});
