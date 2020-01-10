const db = require("../data/db-config");

function getRecipes() {
  return db("recipes").select();
}

// function getShoppingList(recipes_id) {}

// function getInstructions(recipe_id) {}

module.exports = {
  getRecipes
  //   getShoppingList,
  //   getInstructions
};
