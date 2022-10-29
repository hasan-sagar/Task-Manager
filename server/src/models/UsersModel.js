const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: "",
  },
  mobile: {
    type: String,
    required: true,
  },
});

const UsersModel = mongoose.model("User", DataSchema);
module.exports = UsersModel;
