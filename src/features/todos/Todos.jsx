import React, {useCallback} from "react";
import {Link} from "react-router-dom";
import Loader from "../../../../react-query-template/src/components/Loader/Loader";

export const Todo = ({todo, onTodoRemove}) => {
  console.log('TodoListItem', todo);

  const handleRemove = useCallback(
    (e) => {
      e.preventDefault();
      onTodoRemove(todo.id);
    },[todo, onTodoRemove]
  );

  return <li key={todo.id}>
    <button onClick={handleRemove}>X</button>

    <Link to={`todo/${todo.id}`} style={{ textDecoration: 'none' }}>
      <h3>{todo.title}</h3>
    </Link>

    {/*{ user ?*/}
    {/*  <Link to={`user/${todo.userId}`} style={{ textDecoration: 'none' }}>*/}
    {/*    {user.name}*/}
    {/*  </Link>*/}
    {/*  : null*/}
    {/*}*/}
  </li>;
}

export const TodoList = ({todos}) => {
  return <div>TODOLIST</div>
}