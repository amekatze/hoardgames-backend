/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("game").del();
  await knex("game").insert([
    {
      id: "OIXt3DmJU0",
      name: "Catan",
      description: "This is Catan!",
      image_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324722072.jpg",
    },
  ]);
};
