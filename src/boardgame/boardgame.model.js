const config = require('../../knexfile');
const knex = require('knex')(config);

const MEMBER_TABLE = 'member';
const GAME_TABLE = 'game';
const MEMBER_GAME_TABLE = 'member_game';

module.exports = {
  MEMBER_TABLE,
  GAME_TABLE,
  MEMBER_GAME_TABLE,

  /**
   * @param {number} limit - The max number of customers to return.
   * @return {Promise<Array>} A promise that resolves to an array of customers.
   */

  // get games for specific user
  getGameList(id) {
    return knex(MEMBER_TABLE)
      .join(MEMBER_GAME_TABLE, 'member.id', 'member_game.member_id')
      .join(GAME_TABLE, 'member_game.game_id', 'game.id')
      .select({
        member_id: 'member.id',
        game: 'game.name',
        game_id: 'game.id',
        game_image: 'game.image_url',
      })
      .where('member.id', id);
  },

  // post game to DB (game and member_table IF entry doesn't exist)
  async addGame(gameData) {
    async function checkIfInDB(id) {
      const entryInDB = await knex(GAME_TABLE).select('id').where('id', id);
      return entryInDB.length > 0;
    }

    async function checkIfInMemberCollection(gameId, memberId) {
      const entryInDB = await knex(MEMBER_GAME_TABLE)
        .select('game_id')
        .where('member_id', memberId)
        .where('game_id', gameId);
      return entryInDB.length > 0;
    }

    const existInMemberCollection = await checkIfInMemberCollection(
      gameData.id,
      gameData.member_id
    );

    if (!existInMemberCollection) {
      const existInDB = await checkIfInDB(gameData.id);

      if (!existInDB) {
        await knex(GAME_TABLE).insert({
          id: gameData.id,
          name: gameData.name,
          description: gameData.description,
          image_url: gameData.image_url,
          min_players: gameData.min_players,
          max_players: gameData.max_players,
          min_playtime: gameData.min_playtime,
          max_playtime: gameData.max_playtime,
          year_published: gameData.year_published,
        });
      }

      await knex(MEMBER_GAME_TABLE).insert({
        member_id: gameData.member_id,
        game_id: gameData.id,
        status: gameData.status,
      });
    }
  },

  async deleteGame(id) {
    console.log(id);
    return knex(MEMBER_GAME_TABLE).where('game_id', id).del();
  },
};
