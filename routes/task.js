const express = require("express");
const router = express.Router();
const TaskController = require("../controller/TaskController");

router
  .route("/")
  .get(TaskController.getAllTask)
  .post(TaskController.createTask);
router
  .route("/:id")
  .patch(TaskController.updateTask)
  .delete(TaskController.deleteTask)
  .get(TaskController.gerSingleTask);

module.exports = router;
