"use strict";
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const project_routes = require("./routes/routes");

// Routes

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

// Routes
app.use("/api", project_routes);

// Export
module.exports = app;
