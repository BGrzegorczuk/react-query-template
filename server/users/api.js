const express = require("express");
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send('Hello from usersRouter');
});

// userRouter.post('/', (req, res) => {});
// userRouter.put('/:id', (req, res) => {});
// userRouter.patch('/:id', (req, res) => {})
// userRouter.delete('/:id', (req, res) => {});

exports.userRouter = userRouter;