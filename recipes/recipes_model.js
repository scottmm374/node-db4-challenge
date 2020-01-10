const db = require("../data/db-config");

function getRecipes() {
  return db("recipes").select();
}

function getShoppingList(recipe_id) {
  return db
    .select(
      "ri.recipe_id",
      "r.RecipeName",
      "ri.ingredients_id",
      "i.IngredientName",
      "ri.IngredientsQty"
    )
    .from("recipes_ingredients as ri")
    .join("recipes as r", "ri.recipe_id", "r.id")
    .join("ingredients as i", "ri.ingredients_id", "i.id")
    .where({ recipe_id });
}

function getInstructions(recipe_id) {
  return db("instructions as i")
    .join("recipes as r", "i.recipe_id", "r.id")
    .where({ recipe_id })
    .select("i.id", "i.recipe_id", "i.steps", "r.RecipeName")
    .first();
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};
