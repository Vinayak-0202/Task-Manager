const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must enter name"],
    trim: true,
    maxlength: [20, "The name is must be less than 20 character"],
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);
