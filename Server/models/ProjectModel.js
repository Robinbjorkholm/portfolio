const Joi = require("joi");
const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 300,
  },
  stackUsed: {
    type: [String],
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now,
  },
  liveVersion: {
    type: String,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  Code: {
    type: String,
  },
});
const Project = mongoose.model("Project", ProjectSchema);

module.exports.Project = Project;
