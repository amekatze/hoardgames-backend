/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("member_game", function (table) {
    table.increments("id").primary();
    table
      .integer("member_id")
      .notNullable()
      .references("id")
      .inTable("member")
      .onDelete("cascade");
    table
      .string("game_id")
      .notNullable()
      .references("id")
      .inTable("game")
      .onDelete("cascade");
    table.string("status", 32);
    table.integer("rating", 5);
    table.string("review", 255);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("member_game");
};
