const express = require("express");
const router = express.Router();

const {
  deleteTodo,
  postTodo,
  updateTodo,
  getTodos,
  getSingleTodo,
} = require("../controllers/todo");

router.get("/", getTodos);
router.get("/get-single-todo/:todoId", getSingleTodo);
router.post("/new-todo", postTodo);
router.delete("/delete/:todoId", deleteTodo);
router.put("/update/:todoId", updateTodo);

module.exports = router;
