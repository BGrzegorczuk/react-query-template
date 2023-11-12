import { apiClient } from "../../providers/api";

export const fetchCommentsByTodoId = async (todoId) => {
  const res = await apiClient.get(`/comments/todo/${todoId}`);
  return res.data;
}

export const removeComment = async (id) => {
  const res = await apiClient.delete(`/comments/${id}`);
  return res.data;
}