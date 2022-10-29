const express = require("express");
const app = express();
const winston = require("winston");
const logger = require("./logger");

require("dotenv").config();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/database")();

const port = process.env.PORT || 3001;
const server = app.listen(port, () => logger.error(`server started on port: ${port}`));

module.exports = server;
