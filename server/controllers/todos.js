const Todo = require('../models/todo')

const getAlltodos = async (req, res) => {
  let todos = await Todo.find({})
  todos = todos.sort(function(a, b) {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return d-c;
  });
  res.status(200).json({ todos })
}

const createtodo = async (req, res) => {

  const { name, comment } = req.body
  const todo = new Todo({name, comment})
  await todo.save()
  res.status(201).json({ todo })
}

module.exports = {
  getAlltodos,
  createtodo
}
