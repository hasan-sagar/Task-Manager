const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

//routes
const userRoutes = require("./src/routes/user-api");
const taskRoutes = require("./src/routes/task-api");

require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());

//database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(console.log("Database Connected"))
  .catch((error) => {
    console.log(error);
  });
mongoose.connection.on("disconnected", () => {
  console.log("MONGODB DISCONNECTED");
});

//user routes
app.use("/api/v1/users", userRoutes);
//task routes
app.use("/api/v1/tasks", taskRoutes);

//404
app.use("*", (req, res) => {
  res.json({ status: "fail", data: "no route found" });
});

module.exports = app;
