const express = require("express");

const RecipesRouter = require("./recipes/recipes-router");

const server = express();

server.use(express.json());
server.use("/api/recipes", RecipesRouter);

server.get("/", (req, res) => {
  res.json({ Message: "Welcome to recipes" });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ errorMessage: "Something went wrong" });
});

module.exports = server;
