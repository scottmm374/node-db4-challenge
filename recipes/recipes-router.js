const express = require("express");
const Recipes = require("./recipes_model.js");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/shoppingList", async (req, res, next) => {
  try {
    const recipes = await Recipes.getShoppingList(req.params.id);
    res.json(recipes);
  } catch (err) {
    console.log(err, "err");
    next(err);
  }
});

router.get("/:id/instructions", async (req, res, next) => {
  try {
    const instructions = await Recipes.getInstructions(req.params.id);
    res.json(instructions);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
