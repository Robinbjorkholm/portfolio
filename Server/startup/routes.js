const express = require("express");
const Projects = require("../routes/Projects");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use("/projects", Projects);
  app.use(error);
};
