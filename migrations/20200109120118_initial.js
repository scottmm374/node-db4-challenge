exports.up = async function(knex) {
  await knex.schema.createTable("Recipes", table => {
    table.increment("id");
    table.string("RecipeName").notNullable();
  });

  await knex.schema.createTable("Ingredients", table => {
    table.increment("id");
    table.string("IngredientName").notNullable();
  });

  await knex.schema.createTable("Instructions", table => {
    table.increment("id");
    table.string("steps").notNullable();
    table.integer("recipe_id");
    references("id")
      .inTable("Recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("Recipes_Ingredients", table => {
    table.float("IngredientsQty").notNullable();
    table
      .interger("recipe_id")
      .notNullable()
      .references("id")
      .inTable("Recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .interger("ingredients_id")
      .notNullable()
      .references("id")
      .inTable("Ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.primary(["recipe_id", "ingredients_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("Recipes_Ingredients");
  await knex.schema.dropTableIfExists("Instructions");
  await knex.schema.dropTableIfExists("Ingredients");
  await knex.schema.dropTableIfExists("Recipes");
};
