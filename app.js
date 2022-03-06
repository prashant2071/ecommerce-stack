const express = require("express");
const app = express();
const logger = require("./config/logger");
const cors = require("cors");
const morgan = require("morgan");
const process = require("process");
const dotenv = require("dotenv");
dotenv.config();
const { TYPE } = require("./config/envCrediantials").DB;
const { PORT } = require("./config/envCrediantials").SERVERPORT;
const database= TYPE === "sql"
  ? require("./config/config.sql/database")
  : require("./config/config.nosql/database");
const route = require("./routes/apiRoute");
const mongoRoute = require("./routes/mongoapiRoute");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// database();
TYPE === "sql" ? app.use("/api", route): app.use("/api", mongoRoute);

app.listen(PORT || 8081, (err, done) => {
  const date = new Date().toJSON().split("T")[0];
  if (err) {
    console.log("-------------------------------------------");
    console.log(" server                           Ecommerce ");
    console.log(` Port                                ${PORT}`);
    console.log(` Date                                ${date}`);
    console.error(`server connection failed at port ${PORT}  ❌ ❌`);
    console.log("-------------------------------------------");
    logger.error(err);
  } else {
    console.log("-------------------------------------------");
    console.log(" server                           Ecommerce ");
    console.log(` Port                                ${PORT}`);
    console.log(` Date                                ${date}`);
    console.log(`server connected successfully at port ${PORT} ✅ ✅`);
    console.log("Waiting for database connection ");
    console.log("---------------------------------------------");
  }
});
process.on("uncaughtException", (err) => {
  logger.error(err);
});
