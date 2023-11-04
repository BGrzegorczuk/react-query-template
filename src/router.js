import {createBrowserRouter} from "react-router-dom";
import {TodoList} from "./features/todos/Todos";
// import {TodoView} from "./features/todos/TodoView";
// import {UserView} from "./features/users/UserView";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoList/>,
  },
  // {
  //   path: "todo/:todoId",
  //   element: <TodoView/>,
  // },
  // {
  //   path: "user/:userId",
  //   element: <UserView/>,
  // },
]);