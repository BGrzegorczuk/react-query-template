import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {fetchTodos, fetchTodo} from "./todoApi";
import {commonQueryConfig} from "../../config/query.config";

export const todoQueries = {
  all: ['todos'],
  // lists: () => [...todoQueries.all, 'lists'],
  list: (filters={}) => [...todoQueries.all, 'list', filters],
  views: () => [...todoQueries.all, 'views'],
  view: (id) => [...todoQueries.views(), id],
};

export const useTodoListQuery = (
  { page, limit, query },
  additionalOpts = {}
) => useQuery({
  queryKey: todoQueries.list({query, page, limit}),
  queryFn: () => fetchTodos({query, page, limit}),
  placeholderData: keepPreviousData,
  ...commonQueryConfig,
  ...additionalOpts
});

export const useTodoDetailsQuery = (
  id,
  additionalOpts = {}
) => useQuery({
  queryKey: todoQueries.view(id),
  queryFn: () => fetchTodo(id),
  placeholderData: keepPreviousData,
  ...commonQueryConfig,
  ...additionalOpts
});
