const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now } 
});

module.exports = mongoose.model("Todo", TodoSchema);