/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('game', function (table) {
    table.string('id').primary().unique();
    table.string('name', 32).notNullable();
    table.string('description', 255);
    table.string('image_url', 255);
    table.integer('min_player');
    table.integer('max_player');
    table.integer('min_playtime');
    table.integer('max_playtime');
    table.integer('year_published');
    table.string('rules_url', 255);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable('game');
};
