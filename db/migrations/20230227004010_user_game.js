/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user_game", function (table) {
    table.increments("id").primary();
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("user")
      .onDelete("cascade");
    table
      .integer("game_id")
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
  knex.schema.dropTable("user_game");
};
