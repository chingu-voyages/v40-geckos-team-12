require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const taskRouter = require("./routes/tasksRouter");
const userRouter = require("./routes/userRouter");

app.use("/tasks", taskRouter);
app.use("/user", userRouter);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connection Successful");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
