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
};
