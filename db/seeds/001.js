/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("member").del();
  await knex("member").insert([
    { id: 1, username: "bob", password: "hello123" },
  ]);
};
