exports.seed = async knex => {
  await knex("recipes").insert([
    { RecipeName: "Scrambled Eggs" },
    { RecipeName: "PB&J" },
    { RecipeName: "Cheese Omlette" },
    { RecipeName: "Grilled Cheese" }
  ]);
};
