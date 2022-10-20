const express = require("express");
const dbConnect = require("./config/db");

const projectRouter = require("./features/project/project.router");

const companyRouter = require("./features/company/company.router");

const taskRouter = require("./features/tasks/task.router");

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

let PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
// app.use(function (req, res, next) {
//   //Enabling CORS
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization"
//   );
//   next();
// });

app.get("/", (req, res) => {
  res.send("<h1>LIFE IS AWESOME...</h1>");
});
app.use("/company", companyRouter);
app.use("/projects", projectRouter);
app.use("/tasks", taskRouter);

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});
