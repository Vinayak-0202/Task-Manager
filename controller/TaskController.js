const Task = require("../model/Task.js");

exports.getAllTask = (req, res) => {
  res.send("here is all your tasks");
};

exports.gerSingleTask = (req, res) => {
  res.send("here is single tasks");
};

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

exports.updateTask = (req, res) => {
  res.json({ id: req.params.id });
};

exports.deleteTask = (req, res) => {
  res.json({ id: req.params.id });
};
