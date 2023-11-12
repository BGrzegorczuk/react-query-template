import React from 'react';
import {useParams} from "react-router-dom";
import {useQueryClient} from "@tanstack/react-query";

import {useTodoDetailsQuery} from "./queries";
import Loader from "../../components/Loader/Loader";
import {useUserDetailsQuery} from "../users/queries";
import {UserDetails} from "./UserDetails";


export const TodoView = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();

  // Potential solution: https://tkdodo.eu/blog/seeding-the-query-cache#seeding-details-from-lists
  const todoQuery = useTodoDetailsQuery(
    id,
  // {
  //   initialData: () =>
  //     // ⬇️ look up the list cache for the item
  //     queryClient
  //       .getQueryData(todoQueries.list())
  //       ?.find((todo) => todo.id === id)
  //   }
  );
  const userQuery = useUserDetailsQuery(
    todoQuery.data?.userId,
    { enabled: !!todoQuery.data?.userId }
  );
  const isPending = todoQuery.isPending || userQuery.isPending;
  const isError = todoQuery.isError || userQuery.isError;
  const errorMessage = todoQuery.error?.message || userQuery.error?.message;
  const isSuccess = todoQuery.isSuccess && userQuery.isSuccess;

  return <div className='todo-view'>
    {isPending && <Loader/>}

    {isError && <div>{errorMessage}</div>}

    {isSuccess && <>
      <div>Todo:
        <h2>{todoQuery.data.title}</h2>
        <p>Completed: {todoQuery.data.completed ? 'YES' : 'NO'}</p>

        Assigned User: <UserDetails user={userQuery.data}/>
      </div>
    </>}
  </div>;
};