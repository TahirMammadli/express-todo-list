const Todo = require("../model/todo");

exports.getTodos = (req, res, next) => {
  Todo.find()
   
};

exports.deleteTodo = (req, res, next) => {};

exports.updateTodo = (req, res, next) => {};

exports.postTodo = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const todo = new Todo({
    title: title,
    content: content,
  });
  todo
    .save()
    .then((result) => res.json({ message: "saved to db" }))
    .catch((err) => console.log(err));
};

exports.getSingleTodo = (req, res, next) => {};
