require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connection Successful");
  }
});

const { getTasks, createTask } = require("./controllers/TaskController");

app.get("/", getTasks);
app.post("/tasks", createTask);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
