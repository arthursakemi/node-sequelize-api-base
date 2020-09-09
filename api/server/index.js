const express = require("express");
const routes = require("../routes/index");

const server = express();

routes(server);

module.exports = server;
