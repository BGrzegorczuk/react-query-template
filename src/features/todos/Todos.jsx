import React, {useCallback, useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";

import Loader from "../../../../react-query-template/src/components/Loader/Loader";
import {useTodoList} from "./queries";

import Pagination from "../../components/Pagination/Pagination";
import Input from "../../components/forms/Input/Input";
import {useDebouncedValue} from "../../hooks";

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


const DEBOUNCE_TIME = 300;
const QUERY_LIMIT = 20;

export const TodoList = () => {
  let [queryParams, setQueryParams] = useSearchParams();

  let [search, setSearch] = useState(queryParams.get('query') || '');
  let debouncedSearch = useDebouncedValue(search, DEBOUNCE_TIME);

  let [page, setPage] = useState(+queryParams.get('page') || 1);
  const [limit, setLimit] = useState(+queryParams.get('limit') || QUERY_LIMIT);

  let { isPending, isError, isSuccess, data, error } = useTodoList({
    ...debouncedSearch.length && { query: debouncedSearch },
    page,
    limit
  });

  // update query params
  useEffect(() => {
    setQueryParams({
      ...debouncedSearch.length && { query: debouncedSearch },
      page,
      limit
    })
  }, [debouncedSearch, page, limit, setQueryParams]);

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
      { data.items?.length === 0 && <div>No todos found</div> }

      <ul className="todos">
        { data.items?.map((todo) =>
          <TodoListItem
            key={todo.id}
            todo={todo}
            onTodoRemove={() => {}}
          />)}
      </ul>

      { data.items?.length !== 0 &&
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(data.totalCount / limit)}
          onChangePage={setPage}
        />}
    </>}
  </div>;
}