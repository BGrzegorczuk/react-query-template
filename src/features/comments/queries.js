import {useQuery} from "@tanstack/react-query";
import {commonQueryConfig} from "../../config/query.config";
import {fetchCommentsByTodoId} from "./commentApi";

export const commentsQueries = {
  all: ['comments'],
  list: (filters = {}) => [...commentsQueries.all, 'list', filters],
  byTodoId: (todoId) => [...commentsQueries.all, 'todo', todoId],
};

export const useCommentsQuery = (
  todoId,
  additionalOpts = {}
) => useQuery({
  queryKey: commentsQueries.byTodoId(todoId),
  queryFn: () => fetchCommentsByTodoId(todoId),
  ...commonQueryConfig,
  ...additionalOpts
});