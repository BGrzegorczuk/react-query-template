import { apiClient } from "../../providers/api";

export const fetchTodos = async (filters) => {
  console.log('fetchTodos', filters);
  const res = await apiClient.get('todos');
  return res.data;
}