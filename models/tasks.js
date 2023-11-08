const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: [3, "O titulo deve ter pelo menos 3 caracteres"],
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["incomplete", "complete"],
    default: "incomplete",
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
