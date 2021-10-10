const Todo = require("../model/todo");

exports.getTodos = (req, res, next) => {
  Todo.find()
    .then((todo) => res.json(todo))
    .catch((err) => console.log(err));
};

exports.deleteTodo = (req, res, next) => {
  const todoId = req.params.todoId;
  Todo.findByIdAndRemove(todoId).then(result => res.json(result)).catch(err => res.json(err))
};

exports.updateTodo = (req, res, next) => {
  const todoId = req.params.todoId;
  const title = req.body.title;
  const content = req.body.content;
  
  const todo = new Todo({
    title: title,
    content: content
  })

  todo.save().then(result => res.json(result))
  .catch(err => res.json(err));
};

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
