const express = require("express");
const Project = require("./project.model");
const app = express.Router();

//{ <--Getting  all the projects-->}
app.get("/", async (req, res) => {
  try {
    let proj = await Project.find();
    console.log("proj:", proj);
    res.send(proj);
  } catch (error) {
    console.log("error:", error);
    res.status(500).send(error.message);
  }
});

//{<-- Firing post req to create a new Proje-->}
app.post("/new", async (req, res) => {
  let incoming = req.headers.token;

  let [projID, email, password] = incoming.split(":");
  // console.log(projID,email,password)
  let { projectname, clientName } = req.body;

  try {
    let proj = await Project.findOne({ projectname, clientName });
    if (proj) {
      return res.status(404).send("This Project already existing");
    }
    let newProject = await Project.create({
      ...req.body,
      projectID: projID,
    });

    return res.send(newProject);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//{<--Get req for a movie search-->}
app.get("/search", async (req, res) => {
  const { q } = req.query;
  console.log(q);
  try {
    let mov = await Project.find({ projectname: { $regex: q } });
    res.send(mov);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = app;
