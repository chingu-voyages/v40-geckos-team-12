const express = require("express");

const taskRouter = express.Router();

const {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/TaskController");

taskRouter.get("/", getTasks);
taskRouter.post("/", createTask);
taskRouter.delete("/:id", deleteTask);
taskRouter.put("/:id", updateTask);

module.exports = taskRouter;
