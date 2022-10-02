const express = require("express");
const Task = require('./task.model');
const app = express.Router();
const taskMiddleware = require('../../middleware/taskMiddleware');
const Project = require("../project/project.model");

app.use(taskMiddleware);
// <------- Getting  all thetasks ------->
app.get('/' , async (req  ,res) => {
    console.log('req.projectid:', req.projectid);
    try {
        let task = await Task.find({ projectid: req.projectid })
        .populate("projectid");
            res.send(task);   
    } catch (error) {
    res.status(500).send(error.message);
    }
} )


// <------- Post Request all the tasks ------->
app.post('/' , async (req , res) => {
console.log('req.body:', req.body);
// ({$and: [{"gender": "Male"}, {"age": 42}]})
try {
        let task = await Task.findOne({$and : [ { projectid:req.projectid }, { task:req.body.task}]});
        console.log('task:', task)
        if (task) {
          return res.status(404).send("This Task already existing");
        }
        let newTask = await Task.create({
          ...req.body,
          projectid: req.projectid,
        });
        return res.send(newTask);
      } catch (e) {
        res.status(500).send(e.message);
      }
})

// <------- Patch Request all the tasks ------->
app.patch('/:id' , async (req , res) => {
    console.log('req.params:', req.params);
    const id = req.params.id
    console.log('req.body:', req.body)
    try {
        let updatedTask = await Task.findByIdAndUpdate(id , req.body , {
            new : true
        })
        res.send(updatedTask)
    } catch (error) {
        res.status(500).send(error.message)
    }
} )


// <------- DELETE Request all the tasks ------->
app.delete('/:id' , async (req , res) => {
    console.log('req.params:', req.params);
    const id = req.params.id;
    try {
        let tD = await Task.findByIdAndDelete(id);
        res.status(200).send(tD);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


// <---  GET request for teamMembers only....   --->
app.get('/team' , async (req , res) => {
    // console.log('req.projectid:', r);
    //     res.send('team is workin....');

    let id  = req.projectid;
    try {
        const teamMembers = await Project.findById(id , {_id:0 , teamMembers:1}) ;
        console.log('teamMembers:', teamMembers)
        res.send(teamMembers);
    } catch (error) {
        res.status(404).send(error.message);
    }
})



module.exports = app;