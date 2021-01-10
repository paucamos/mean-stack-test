"use strict";
const project = require("../models/project");
const Project = require("../models/project");
const controller = {
  home: (req, res) => {
    return res.status(200).send({
      message: "Im the home page!",
    });
  },

  test: (req, res) => {
    return res.status(200).send({
      message: "Im the test page!",
    });
  },

  saveProject: (req, res) => {
    const project = new Project();
    const params = req.body;

    project.name = params.name;
    project.description = params.description;
    project.category = params.category;
    project.year = params.year;
    project.langs = params.langs;
    project.image = null;

    project.save((err, projectStored) => {
      if (err)
        return res.status(500).send({ message: "Error in the request." });
      if (!projectStored)
        return res.status(404).send({ message: "Project not saved." });
      return res.status(200).send({ project: projectStored });
    });
  },

  getProject: (req, res) => {
    const project_id = req.params.id;
    if (!project_id) {
      return res.status(500).send({ message: "Project doesn't exist" });
    }
    Project.findById(project_id, (err, project) => {
      if (err) {
        return res.status(500).send({ message: "Error in the request." });
      }
      if (!project) {
        return res.status(404).send({ message: "Project not saved." });
      }
      return res.status(200).send({ project });
    });
  },

  getAllProjects: (req, res) => {
    Project.find({})
      .sort("-year")
      .exec((err, projects) => {
        if (err) {
          return res.status(500).send({ message: "Error in the request." });
        }
        if (!project) {
          return res.status(404).send({ message: "No projects found." });
        }
        return res.status(200).send({ projects });
      });
  },
};

module.exports = controller;
