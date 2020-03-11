const express = require("express");
const server = express();
const {
  getAuthCode,
  getAccessToken
} = require("./controllers/auth.controllers.js");

server.get("/", getAuthCode);

server.get("/api/auth", getAccessToken);

module.exports = server;
