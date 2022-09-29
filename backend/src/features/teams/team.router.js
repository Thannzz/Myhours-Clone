const express = require("express");
const Task = require('./team.model');
const app = express.Router();
const taskMiddleware = require('../../middleware/taskMiddleware');

app.use(taskMiddleware);
// <------- Getting  all thetasks ------->
app.get('/' , async (req  ,res) => {
    console.log('req.projectid:', req.projectid);
    try {
        let task = await Task.find({ projectid: req.projectid })
        // .populate("projectid");
            res.send(task);   
    } catch (error) {
    res.status(500).send(error.message);
    }
} )


// <------- Post Request all the tasks ------->
app.post('/' , async (req , res) => {
console.log('req.body:', req.body);
try {
        let task = await Task.findOne({ task:req.body.task});
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

module.exports = app;