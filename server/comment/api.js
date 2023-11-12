const express = require("express");
const {comments} = require("./db");
const commentRouter = express.Router();

commentRouter.get('/todo/:todoId', (req, res) => {
  const { todoId } = req.params;
  const filteredComments = comments.filter((comment) => comment.todoId === +todoId);
  res.json(filteredComments);
});

// commentRouter.post('/', (req, res) => {});
// commentRouter.put('/:id', (req, res) => {});
// commentRouter.patch('/:id', (req, res) => {})

commentRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = comments.findIndex((comment) => comment.id === +id);
  comments.splice(index, 1);
  res.json({});
});

exports.commentRouter = commentRouter;