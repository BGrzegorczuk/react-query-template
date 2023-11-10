import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";

import Loader from "../../../../react-query-template/src/components/Loader/Loader";
import {todosQueries, useTodoList} from "./queries";

import "./Todos.css";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {fetchTodos} from "./todoApi";
import {debounce} from "../../utils";

import Pagination from "../../components/Pagination/Pagination";
import Input from "../../components/forms/Input/Input";

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
  const queryClient = useQueryClient()
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  console.log({page, limit, search});
  const { isPending, isError, isSuccess, data, error } = useTodoList();

  console.log('TODOLIST RENDER');

  const handleInputChange = useCallback((val) => {
    setSearch(val);
    fetchTodos({page, limit, search: val});
  }, []);

  const fetchTodos = useCallback(({page, limit, search}) => debounce((
    queryClient.fetchQuery({
      queryKey: todosQueries.list(),
      queryFn: () => fetchTodos({ page, limit, phrase: search })
    })
  ), 300), [queryClient, page, limit, search]);

  // const fetchData = useCallback(debounce((e) => {
  //   // Update the query key without causing re-renders
  //   // queryClient.removeQueries(todosQueries.list();
  //   setSearch(e.target.value);
  //
  //
  //   queryClient.fetchQuery(
  //     {
  //       queryKey: todosQueries.list(),
  //       queryFn: () => fetchTodos({page, limit, phrase: search})
  //     });
  //   // queryClient.invalidateQueries(['todos', { phrase: inputValue }]);
  // }, 300), []);

  if (isPending) {
    return <Loader/>;
  }
  else if (isError) {
    return <div>{error.message}</div>;
  }

  else if (isSuccess) {
    return <div className="todo-list">
      <h2>TodoList</h2>

      <div className="todo-form">
        <form id="todo-form">
          <Input value={search} onChange={handleInputChange}/>
        </form>
      </div>

      <ul className="todos">
        { data.map((todo) =>
          <TodoListItem key={todo.id}
                todo={todo}
                onTodoRemove={() => {}}
          />)}
      </ul>
      <Pagination currentPage={page} totalPages={10}/>
    </div>;
  }
}