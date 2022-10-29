const { createLogger, transports, format } = require("winston");
const winston = require("winston");
require("winston-mongodb");
require("dotenv").config();

const logger = createLogger({
  transports: new transports.MongoDB({
    level: "error",
    db: `${process.env.MongoDB}`,
    options: {
      useUnifiedTopology: true,
    },
    collection: "WinstonErrors",
  }),
});

module.exports = logger;
