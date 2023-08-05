const Task = require("../model/Task.js");

exports.getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).json({ tasks });
  } catch (err) {
    res.status(500).json({ err });
  }
};

exports.gerSingleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res
        .status(404)
        .json({ message: `Nop task with id ${req.params.id}` });
    }
    res.status(201).json({ task });
  } catch (err) {
    res.status(404).json({ err });
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ err });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res
        .status(404)
        .json({ message: `Nop task with id ${req.params.id}` });
    }

    res.status(200).json({ message: `your task updated sucessfuly` });
  } catch (err) {
    res.status(500).json({ err });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ message: `no task with id ${taskID}` });
    }
    // res.status(200).json({ message: `${task} is deleted sucessfuly` });
    res.status(200).json({ task: null, statud: "sucess" });
  } catch (err) {
    res.status(500).json({ err });
  }
};
