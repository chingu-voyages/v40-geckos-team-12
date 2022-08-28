// Create and export all the functions needed to create a task

const Task = require("../models/Tasks");

module.exports = {
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.send(tasks);
    } catch (err) {
      res.json({ message: err });
    }
  },
  createTask: async (req, res) => {
    try {
      const task = await Task.create(req.body);
      res.send(task);
    } catch (err) {
      res.json({ message: err });
    }
  },
  deleteTask: async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) {
        return res.status(404).send({
          message: "Task not found with id " + req.params.id,
        });
      }
      res.send({
        message: `Task with the id of ${task._id} deleted successfully!`,
        id: task._id,
        data: "I am now defined",
      });
    } catch (err) {
      res.json({ message: err });
    }
  },
};
