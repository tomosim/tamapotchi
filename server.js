const express = require("express");
const server = express();
const {
  getAuthCode,
  getAccessTokens
} = require("./controllers/auth.controllers.js");
const { makeTamapotchi } = require("./controllers/tamapotchi.controllers.js");

server.use(express.static(__dirname + "/public"));

server.get("/api", getAuthCode);
server.get("/api/auth", getAccessTokens);

server.get("/api/tamapotchi", makeTamapotchi);

module.exports = server;
