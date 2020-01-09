exports.seed = async knex => {
  await knex("instructions").insert([
    {
      steps:
        "1. Crack two eggs into a bowl and whisk until blended. 2. Put eggs in pan at medium-high heat. 3. Scrape pan with spatula while cooking until eggs are done, ",
      recipe_id: 1
    },
    {
      steps:
        "1. Spread Peanut butter on one slice of bread. 2. Spread Jelly on second slice of bread. 3. Put both pieces of bread together",
      recipe_id: 2
    },
    {
      steps:
        "1. Crack 3 eggs and milk into bowl and whisk together with a fork. 2. Pour eggs mixture into skillet on medium high heat. 3. Once egg mixture is starting to cook through add cheese. 4. Once Bottom is fairly solid Fold over half egg mixture onto itself. ",
      recipe_id: 3
    },
    {
      steps:
        "1. Butter one side of each slice of bread. 2. Once skillet is heated up (Med high heat) Place one slice of bread butter side down in skillet, add slice of cheese and second slice of bread butter side up. 3. Once Bread starts to brown, flip sandwhich to cook the other side. ",
      recipe_id: 4
    }
  ]);
};
