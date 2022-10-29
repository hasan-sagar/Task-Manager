const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
  },
  email: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

const TaskModel = mongoose.model("Task", DataSchema);
module.exports = TaskModel;
