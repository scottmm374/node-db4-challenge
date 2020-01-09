exports.seed = async knex => {
  // * Again create cleanup in reverse order of tables creation
  await knex("recipes_ingredients").truncate();
  await knex("instructions").truncate();
  await knex("ingredients").truncate();
  await knex("recipes").truncate();
};
