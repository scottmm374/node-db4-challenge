exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
    table.increment("id");
    table.string("RecipeName").notNullable();
  });

  await knex.schema.createTable("ingredients", table => {
    table.increment("id");
    table.string("IngredientName").notNullable();
  });

  await knex.schema.createTable("instructions", table => {
    table.increment("id");
    table.string("steps").notNullable();
    table.integer("recipe_id");
    references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("recipes_ingredients", table => {
    table.float("IngredientsQty").notNullable();
    table
      .interger("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .interger("ingredients_id")
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
