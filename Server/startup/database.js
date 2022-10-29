const mongoose = require("mongoose");
const config = require("config");
require("dotenv").config();

module.exports = function(app) {
  mongoose
    .connect(`${process.env.MongoDB}`, {
      useNewUrlParser: true,
    })
    .then(() => console.log("Connected to projectdb"));
};
