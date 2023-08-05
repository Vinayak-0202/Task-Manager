const express = require("express");
const router = express.Router();
const {
  getAllTask,
  getTask,
  updateTask,
  deleteTask,
  createTask,
  editTask,
} = require("../controller/TaskController");

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").patch(updateTask).delete(deleteTask).get(getTask);

module.exports = router;
