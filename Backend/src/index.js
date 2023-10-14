const express = require("express");
const http = require("http");
const bodyParse = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./models");
const routes = require("./routes/main");

const Port = 8081;

const app = express();
app.use(bodyParse.json());
app.use(cors());
app.use(morgan("combined"));

//using routes
app.use("/user", routes.accounts);
app.use("/product", routes.transaction);

const server = http.createServer(app);

sequelize.sync({ alter: false }).then(() => {
  server.listen(Port);
  server.on("listening", () => {
    console.log(`Listening on Port ${Port}`);
  });
});
