/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("game", function (table) {
    table.string("id").primary();
    table.string("name", 32).notNullable();
    table.string("description", 255);
    table.string("image_url", 255);
    table.integer("min_players");
    table.integer("max_players");
    table.integer("min_playtime");
    table.integer("max_playtime");
    table.integer("year_published");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("game");
};
