const express = require("express");
const User = require("./user.model");
const app = express.Router();

app.get('/' , async  (req , res) => {
  try {
    let u = await User.find();
    console.log('u:', u)
    res.send(u)
    
  } catch (error) {
    console.log('error:', error)
    res.status(500).send(error.message)
  }
})

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).send("Authentication failed");
    }

    res.send({
      token: `${user.id}:${user.email}:${user.password}`,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post("/signup", async (req, res) => {
  
  // let createdUser = await User.create(req.body);
  //   res.send({
  //     token: `${createdUser.id}:${createdUser.email}:${createdUser.password}`,
  //   });



  let { email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(404)
        .send(
          "Cannot create a user with existing email address, trying logging in using this email address"
        );
    }
    let createdUser = await User.create(req.body);
    res.send({
      token: `${createdUser.id}:${createdUser.email}:${createdUser.password}`,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;
