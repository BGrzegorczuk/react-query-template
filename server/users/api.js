const express = require("express");
const userRouter = express.Router();
const {users} = require("./db");


userRouter.get('/', (req, res) => {
  res.send('Hello from usersRouter');
});

userRouter.get('/:id', (req, res) => {
  const user = users.find((user) => user.id === +req.params.id);
  res.json(user);
});

// userRouter.post('/', (req, res) => {});
// userRouter.put('/:id', (req, res) => {});
// userRouter.patch('/:id', (req, res) => {})
// userRouter.delete('/:id', (req, res) => {});

exports.userRouter = userRouter;