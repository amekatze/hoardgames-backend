const boardgameModel = require("./boardgame.model");

module.exports = {
  async getGameList(req, res) {
    const allGames = await boardgameModel.getGameList(req.query.id);
    res.status(201).send(allGames);
  },

  async addGame(req, res) {
    await boardgameModel.addGame(req.body);
    res.status(201).send("Game added.");
  },

  async deleteGame(req, res) {
    console.log(req.body);
    await boardgameModel.deleteGame(req.body.id);
    res.status(201).send("Deleted");
  },
};
