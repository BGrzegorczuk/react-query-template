const express = require("express");
const {todos} = require("./db");
const todoRouter = express.Router();

todoRouter.get('/', (req, res) => {
  console.log('GET /api/todos', req.query);

  const {page, limit, query} = req.query;
  const filteredTodos = todos.filter((todo) =>
    query ? todo.title.toLowerCase().includes(query.toLowerCase()) : true
  );
  const start = (page-1) * +limit;
  const end = start + +limit;

  res.json(
    filteredTodos.slice(start, end)
  );

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