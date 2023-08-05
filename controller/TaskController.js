const Task = require("../models/Task.js");
const asyncWrapper = require("../middlware/asynvWrapper.js");
const { creatCustomError } = require("../errors/customError.js");
const getAllTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(201).json({ tasks });
  // res
  //   .status(200)
  //   .json({ status: "sucess", data: tasks, nbHits: tasks.length });
});

getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return next(creatCustomError(`Nop task with id ${req.params.id}`, 404));
  }
  res.status(201).json({ task });
});

createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(creatCustomError(`Nop task with id ${req.params.id}`, 404));
  }

  res.status(200).json({ message: `your task updated sucessfuly` });
});

deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(creatCustomError(`Nop task with id ${req.params.id}`, 404));
  }
  // res.status(200).json({ message: `${task} is deleted sucessfuly` });
  res.status(200).json({ task: null, statud: "sucess" });
});

module.exports = {
  getTask,
  getAllTask,
  updateTask,
  deleteTask,
  createTask,
};
