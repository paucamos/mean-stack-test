"use strict";

const { Router } = require("express");
const express = require("express");
const ProjectController = require("../controller/project");

const router = express.Router();

router.get("/home", ProjectController.home);
router.get("/test", ProjectController.test);
router.post("/save-project", ProjectController.saveProject);
router.get("/project/:id?", ProjectController.getProject);
router.get("/projects", ProjectController.getAllProjects);
module.exports = router;
