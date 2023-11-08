const asyncHandler = require("express-async-handler");
const Task = require("../models/tasks");

// Handler to get all tasks
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({});
  res.json(tasks);
});

// Handler to create a new task
const createTask = asyncHandler(async (req, res) => {
  const { title, description, status } = req.body;
  const task = new Task({
    title,
    description,
    status,
  });
  const createdTask = await task.save();
  res.status(201).json(createdTask);
});

// Handler to delete a task by ID
const deleteTaskById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedTask = await Task.findByIdAndDelete(id);
  if (deletedTask) {
    res.json({ message: "Task deleted successfully" });
  } else {
    res.status(404);
    throw new Error("Task not found");
  }
});

module.exports = { getTasks, createTask, deleteTaskById };
