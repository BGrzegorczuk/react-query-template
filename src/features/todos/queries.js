import {useQuery} from "@tanstack/react-query";
import {fetchTodos} from "./todoApi";

const DEFAULT_LIMIT = 10;

export const todosQueries = {
  all: ['todos'],
  // lists: () => [...todosQueries.all, 'lists'],
  list: (r) => [...todosQueries.all, 'list'],
  // details: (id) => [...todosQueries.all, 'details'],
  detail: (id) => [...todosQueries.all, 'detail', id],
};

export const useTodoList = (page=1, limit=DEFAULT_LIMIT, search='') => useQuery({
  queryKey: todosQueries.list(),
  queryFn: () => fetchTodos({page, limit, search}),
  // refetchOnWindowFocus: false,
  // refetchOnMount: false,
  // refetchOnReconnect: false,
  // refetchInterval: 5 * 1000,
  // refetchIntervalInBackground: true,
  // refetchIntervalInBackgroundDelay: 5 * 1000,
  // retry: 3,
  // retryDelay: 5 * 1000,
  // staleTime: 5 * 1000
});
