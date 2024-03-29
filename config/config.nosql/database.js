const mongodb = require("mongodb");
const mongoose = require("mongoose");
const logger = require("../logger");
const { DB } = require("./../envCrediantials");

// mongodb://localhost:27017
 mongoose
  .connect(`${DB.TYPE}://${DB.HOST}:27017/${DB.NAME}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log("DB Database connected! ✅ ✅");
    console.log("----------------------------------");
  })
  .catch((err) => {
    console.error("failed to connect to mongo Database   ❌ ❌");
    console.log("---------------------------------------------");
    logger.error(err);
  });
