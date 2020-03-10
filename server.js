const express = require("express");
const server = express();
const {
  getAuthCode,
  getAccessToken
} = require("./controllers/api.controllers");

server.get("/", getAuthCode);

server.get("/api/auth", getAccessToken);

module.exports = server;
