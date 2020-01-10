const express = require("express");
const Recipes = require("./recipes_model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes().select();
    res.json(recipes);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
