import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {fetchTodos} from "./todoApi";

const DEFAULT_LIMIT = 10;

export const todosQueries = {
  all: ['todos'],
  // lists: () => [...todosQueries.all, 'lists'],
  list: (filters) => [...todosQueries.all, 'list', filters],
  // details: (id) => [...todosQueries.all, 'details'],
  detail: (id) => [...todosQueries.all, 'detail', id],
};

export const useTodoList = ({page, limit, query}) => useQuery({
  queryKey: todosQueries.list({
    query,
    page,
    limit: limit || DEFAULT_LIMIT,
  }),
  queryFn: () => fetchTodos({
    query,
    page,
    limit: limit || DEFAULT_LIMIT,
  }),
  placeholderData: keepPreviousData,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  // refetchOnReconnect: false,
  // refetchInterval: 5 * 1000,
  // refetchIntervalInBackground: true,
  // refetchIntervalInBackgroundDelay: 5 * 1000,
  retry: 3,
  // retryDelay: 5 * 1000,
  staleTime: 5 * 1000
});
