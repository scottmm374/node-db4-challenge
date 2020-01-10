exports.seed = async knex => {
  await knex("recipes_ingredients").insert([
    { recipe_id: 1, ingredients_id: 1, ingredientsQty: 2 },
    { recipe_id: 2, ingredients_id: 3, ingredientsQty: 2 },
    { recipe_id: 2, ingredients_id: 4, ingredientsQty: 2 },
    { recipe_id: 2, ingredients_id: 5, ingredientsQty: 2 },
    { recipe_id: 3, ingredients_id: 1, ingredientsQty: 3 },
    { recipe_id: 3, ingredients_id: 6, ingredientsQty: 1 },
    { recipe_id: 3, ingredients_id: 2, ingredientsQty: 4 },
    { recipe_id: 4, ingredients_id: 2, ingredientsQty: 2 },
    { recipe_id: 4, ingredients_id: 5, ingredientsQty: 2 },
    { recipe_id: 4, ingredients_id: 7, ingredientsQty: 4 }
  ]);
};
