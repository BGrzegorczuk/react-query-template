import { apiClient } from "../../providers/api";

export const fetchTodos = async ({query, page, limit}) => {

  const res = await apiClient.get('todos', {params: {
    query,
    page,
    limit
  }});
  return res.data;
}