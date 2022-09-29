const express = require("express");
const Project = require("./project.model");
const app = express.Router();
const projectMiddleware = require("../../middleware/projectMiddleware");

app.use(projectMiddleware);
//{ <--Getting  all the projects-->}
app.get("/", async (req, res) => {
    const {status} =  req.query
    console.log('status:',typeof status)
    if(status && status === "active"){
      try {
        let proj = await Project.find( {$and:[{ companyID: req.companyID } , {status:true}] } );
        res.send(proj);
      } catch (error) {
        res.status(500).send(error.message);
      }
    }else if (status && status === 'archived'){
      try {
        let proj = await Project.find( {$and:[{ companyID: req.companyID } , {status:false}] } );
        res.send(proj);
      } catch (error) {
        res.status(500).send(error.message);
      }
    }else{
      try {
        let proj = await Project
        .find({ companyID: req.companyID });
        // console.log("proj:", proj);
        res.send(proj);
      } catch (error) {
        console.log("error:", error);
        res.status(500).send(error.message);
      }

    }
});

//{ <--Getting  all the projects based on status -->}
// app.get('/')


//{<-- Firing post req to create a new Proje-->}
app.post("/new", async (req, res) => {
  let companyID = req.companyID;
  // console.log(companyID);
  let { projectname, clientName } = req.body;

  try {
    let proj = await Project.findOne({ projectname, clientName });

    if (proj) {
      return res.status(404).send("This Project already existing");
    }

    let newProject = await Project.create({
      ...req.body,
      companyID: companyID,
    });

    return res.send(newProject);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//{<--Get req for searching projectName & clientName-->}
app.get("/search", async (req, res) => {
  const { q } = req.query;

  try {
    let items = await Project.find({
      $or: [{ projectname: { $regex: q } }, { clientName: { $regex: q } }],
    });
    res.send(items);
  } catch (e) {
    console.log(e.message);
  }
});

//{<--Firing Delete req for an projectid-->}
app.delete("/:id", async (req, res) => {
  let { id } = req.params;

  await Project.findOneAndRemove({ id: id })
    .then((user) => {
      if (!user) {
        res.status(400).send(id + " was not found");
      } else {
        res.status(200).send(id + " was deleted.");
      }
    })

    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//{<-- Firing Patch req for projectID -->}
app.patch("/:id", async (req, res) => {
  let [empty, id] = req.params.id.split(":");

  let updatedData = req.body;

  try {
    let updatedProject = await Project.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.send(updatedProject);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
module.exports = app;
