const express = require("express");
const {comments} = require("./db");
const commentRouter = express.Router();

commentRouter.get('/', (req, res) => {
  res.json(comments);
});

// commentRouter.post('/', (req, res) => {});
// commentRouter.put('/:id', (req, res) => {});
// commentRouter.patch('/:id', (req, res) => {})
// commentRouter.delete('/:id', (req, res) => {});

exports.commentRouter = commentRouter;