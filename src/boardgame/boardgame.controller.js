const boardgameModel = require("./boardgame.model");

module.exports = {
  async getGameList(req, res) {
    const allGames = await boardgameModel.getGameList(req.query.id);
    console.log(allGames);
    res.status(201).send(allGames);
  },

  async addGame(req, res) {
    await boardgameModel.addGame(req.body);
    res.status(201).send("Game added.");
  },
};
