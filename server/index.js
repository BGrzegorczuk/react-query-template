const express = require('express');
// NOTE: CORS handled by proxy property in package.json
// const cors = require('cors');
const {userRouter} = require("./users/api");
const {todoRouter} = require("./todos/api");
const {commentRouter} = require("./comment/api");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//implement simple middleware for logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// API
app.use('/api/users', userRouter);
app.use('/api/todos', todoRouter);
app.use('/api/comments', commentRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});