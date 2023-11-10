const express = require("express");
const {todos} = require("./db");
const todoRouter = express.Router();

todoRouter.get('/', (req, res) => {
  res.json(todos);
});
todoRouter.get('/:id', (req, res) => {
  const todo = todos.find((todo) => todo.id === +req.params.id);
  res.json(todo);
});

// todoRouter.post('/', (req, res) => {});
// todoRouter.put('/:id', (req, res) => {});
// todoRouter.patch('/:id', (req, res) => {})
// todoRouter.delete('/:id', (req, res) => {});

exports.todoRouter = todoRouter;