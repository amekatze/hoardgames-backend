const config = require("../../knexfile");
const knex = require("knex")(config);

const MEMBER_TABLE = "member";
const GAME_TABLE = "game";
const MEMBER_GAME_TABLE = "member_game";

module.exports = {
  MEMBER_TABLE,
  GAME_TABLE,
  MEMBER_GAME_TABLE,

  /**
   * @param {number} limit - The max number of customers to return.
   * @return {Promise<Array>} A promise that resolves to an array of customers.
   */

  // Create new user
  async createUser(userData) {
    try {
      await knex(MEMBER_TABLE).insert({
        username: userData.username,
        password: userData.password,
      });
      return { success: true };
    } catch (error) {
      if (error.code === "23505") {
        return { success: false, message: "Username already exists" };
      }
      throw error;
    }
  },

  // Login user
  async loginUser(userData) {
    const user = await knex(MEMBER_TABLE)
      .select({
        username: "username",
        password: "password",
      })
      .where("username", userData.username)
      .first();

    if (!user) {
      return { message: "User not found" };
    }
    console.log(userData.password, user);

    if (user.password !== userData.password) {
      return { message: "Incorrect password" };
    }

    return { message: "Login successful" };
  },
};
