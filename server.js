const express = require("express");
const server = express();
const { getAuth, createTamapotchi } = require("./controllers/api.controllers");

server.get("/api/auth", getAuth);

server.get("/api/tamapotchi", createTamapotchi);

module.exports = server;
