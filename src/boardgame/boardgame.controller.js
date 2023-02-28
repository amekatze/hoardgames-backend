const boardgameModel = require('./boardgame.model');

module.exports = {
  async getGameList(req, res) {
    const allGames = await boardgameModel.getGameList(req.query.id);
    res.status(201).send(allGames);
  },

  async addGame(req, res) {
    await boardgameModel.addGame(req.body);
    res.status(201).send('Game added.');
  },

  async deleteGame(req, res) {
    await boardgameModel.deleteGame(req.body.gameId, req.body.memberId);
    res.status(201).send('Deleted');
  },

  async updateRating(req, res) {
    await boardgameModel.updateRating(
      req.body.gameId,
      req.body.memberId,
      req.body.rating
    );
    res.status(201).send('');
  },

  async updateNote(req, res) {
    await boardgameModel.updateNote(
      req.body.gameId,
      req.body.memberId,
      req.body.note
    );
    res.status(201).send('');
  },
};
