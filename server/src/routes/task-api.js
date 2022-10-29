const express = require("express");
const {
  CreateTask,
  DeleteTask,
  UpdateTaskStatus,
  ListTaskByStatus,
  TaskStatusCount,
} = require("../controllers/TaskController");
const AuthenticationVerify = require("../middleware/AuthenticationVerify");
const router = express.Router();

//create task
router.post("/createTask", AuthenticationVerify, CreateTask);
//delete task
router.get("/deleteTask/:id", AuthenticationVerify, DeleteTask);
//update status
router.get(
  "/updateTaskStatus/:id/:status",
  AuthenticationVerify,
  UpdateTaskStatus
);
//list by status
router.get("/listTaskByStatus/:status", AuthenticationVerify, ListTaskByStatus);
//task total status
router.get("/taskStatusByCount", AuthenticationVerify, TaskStatusCount);

module.exports = router;
