exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
    table.increments("id");
    table.string("RecipeName").notNullable();
  });

  await knex.schema.createTable("ingredients", table => {
    table.increments("id");
    table.string("IngredientName").notNullable();
  });

  await knex.schema.createTable("instructions", table => {
    table.increments("id");
    table.string("steps").notNullable();
    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("recipes_ingredients", table => {
    table.float("ingredientsQty").notNullable();
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("ingredients_id")
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.primary(["recipe_id", "ingredients_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes_ingredients");
  await knex.schema.dropTableIfExists("instructions");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
};
