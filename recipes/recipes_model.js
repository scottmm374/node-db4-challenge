const db = require("../data/db-config");

function getRecipes() {
  return db("recipes").select();
}

// function getShoppingList(recipes_id) {}

function getInstructions(recipe_id) {
  return db("instructions as i")
    .join("recipes as r", "i.recipe_id", "r.id")
    .where({ recipe_id })
    .select("i.id", "i.recipe_id", "i.steps", "r.RecipeName");
}

module.exports = {
  getRecipes,
  //   getShoppingList,
  getInstructions
};
