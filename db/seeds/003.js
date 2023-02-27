/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("member_game").del();
  await knex("member_game").insert([
    {
      id: 1,
      member_id: "1",
      game_id: "OIXt3DmJU0",
      status: "played",
      rating: 4,
    },
  ]);
};
