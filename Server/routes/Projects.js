const express = require("express");
const { Project } = require("../models/ProjectModel");
const mongoose = require("mongoose");
const router = express.Router();
const mongodb = require("mongodb");

router.get("/", async (req, res) => {
  const projects = await Project.find().sort({ Date: -1 });
  res.send(projects);
  console.log(projects);
});

module.exports = router;
