const express = require("express");
const http = require("http");
const bodyParse = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");


const Port = 8081;

const app = express();
app.use(bodyParse.json());
app.use(cors());
app.use(morgan("combined"));
const server = http.createServer(app);

server.listen(Port);
  server.on("listening", () => {
    console.log(`Listening on Port ${Port}`);
  })