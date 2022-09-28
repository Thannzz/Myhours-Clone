// const Project = require("../features/project/project.model");

const taskMiddleware = async (req, res, next) => {
//   let token = req.headers.token;
let projectid = req.headers.projectid;
// console.log('projectid:', req.headers.projectid)
  if (projectid) {
    req.projectid = projectid;
    next();
  } else {
    res.status(404).send("Missing_project_authentications");
  }
};

module.exports = taskMiddleware;