const express = require("express");
const dbConnect = require("./config/db");


const projectRouter = require("./features/project/project.router");

const companyRouter = require("./features/company/company.router");


// const cartRouter = require("./features/cart/cart.router");
const cors = require("cors");

let PORT = 8080;

const app = express();

app.use(express.json());
app.use(cors());


app.get('/' , (req , res) => {
  res.send("<h1>LIFE IS AWESOME...</h1>")
})
app.use("/company", companyRouter);
app.use("/projects", projectRouter);
// app.use("/products", productRouter);
// app.use("/carts", cartRouter);

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});
