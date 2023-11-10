import { apiClient } from "../../providers/api";

export const fetchTodos = async ({query, page, limit}) => {
  console.log('fetchTodos', {query, page, limit});
  const res = await apiClient.get('todos', {params: {
    ...query.length && {query},
    page,
    limit
  }});
  return res.data;
}