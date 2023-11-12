import React from 'react';
import {useParams} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import {UserDetails} from "./UserDetails";
import {CommentList} from "../comments/CommentList";

import {useTodoDetailsQuery} from "./queries";
import {useUserDetailsQuery} from "../users/queries";

export const TodoView = () => {
  const { id } = useParams();

  // Potential improvement: https://tkdodo.eu/blog/seeding-the-query-cache#seeding-details-from-lists
  const todoQuery = useTodoDetailsQuery(id);
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

        <CommentList todoId={id}/>
      </div>
    </>}
  </div>;
};