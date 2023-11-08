const { Router } = require("express");
const router = Router();
const {
  getTasks,
  createTask,
  deleteTaskById,
} = require("../controllers/tasksController");

// GET all tasks
router.get("/", getTasks);

// CREATE a new task
router.post("/", createTask);

// DELETE a task by ID
router.delete("/:id", deleteTaskById);

module.exports = router;
