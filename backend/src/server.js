const express = require("express");
const dbConnect = require("./config/db");
const userRouter = require("./features/user/user.router");
const projectRouter = require("./features/project/project.router");
// const cartRouter = require("./features/cart/cart.router");
const cors = require("cors");

let PORT = 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("<h1>LIFE IS AWESOME...</h1>");
});
app.use("/users", userRouter);
app.use("/projects", projectRouter);
// app.use("/carts", cartRouter);

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});
