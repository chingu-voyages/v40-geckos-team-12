//Step1: Import
const mongoose = require("mongoose");

//Step2: Make Schema
let TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    subtasks: {
      type: Array,
    },
    status: {
      type: String,
    },
  },
  {
    collection: "tasks",
  }
);

// Step3: Assign Schema to Model
const model = mongoose.model("Task", TaskSchema);

//Step4: Exporting Model
module.exports = model;
