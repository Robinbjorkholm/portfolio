const express = require("express");
const app = express();
const winston = require("winston");
const logger = require("./logger");

app.set("view engine", "ejs");
require("dotenv").config();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/database")();
require("./startup/prod")(app);

app.listen(process.env.PORT || 3001, () => {
  console.log(`server started on  ${3001}`);
});
