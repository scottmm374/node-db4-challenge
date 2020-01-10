exports.seed = async knex => {
  await knex("ingredients").insert([
    { IngredientName: "egg" },
    { IngredientName: "slice of cheese" },
    { IngredientName: "tbs of peanut butter" },
    { IngredientName: "tbs of jelly" },
    { IngredientName: "slice of bread" },
    { IngredientName: "1/4 cup of milk" },
    { IngredientName: "tbs of butter" }
  ]);
};
