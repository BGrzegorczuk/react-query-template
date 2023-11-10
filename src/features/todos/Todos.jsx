import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";

import Loader from "../../../../react-query-template/src/components/Loader/Loader";
import {useTodoList} from "./queries";

import Pagination from "../../components/Pagination/Pagination";
import Input from "../../components/forms/Input/Input";
import {useDebounce} from "../../hooks";

import "./Todos.css";

export const TodoListItem = ({todo, onTodoRemove}) => {
    const handleRemove = useCallback(
    (e) => {
      e.preventDefault();
      onTodoRemove(todo.id);
    },[todo, onTodoRemove]
  );

  return <li className="todo-item">
    <Link to={`/todos/${todo.id}`} style={{ textDecoration: 'none' }}>
      <h3>{todo.title}</h3>
    </Link>

    <button className="remove-button" onClick={handleRemove}>❌</button>
  </li>;
}


export const TodoList = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);
  const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(10);
  const { isPending, isError, isSuccess, data, error } = useTodoList({
    query: debouncedSearch,
    page,
    limit: 10,
  });

  const handleInputChange = (val) => {
    setSearch(val);
  };

  return <div className="todo-list">
    <h2>TodoList</h2>

    <div className="todo-form">
      <form id="todo-form">
        <Input value={search} onChange={handleInputChange}/>
      </form>
    </div>

    {isPending && <Loader/>}

    {isError && <div>{error.message}</div>}

    {isSuccess && <>
      <ul className="todos">
        { data.map((todo) =>
          <TodoListItem
            key={todo.id}
            todo={todo}
            onTodoRemove={() => {}}
          />)}
      </ul>
      <Pagination currentPage={page} totalPages={10} onChangePage={setPage}/>
    </>}
  </div>;
  // }
}