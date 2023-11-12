import {removeComment} from "./commentApi";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {commentsQueries} from "./queries";

export const useRemoveCommentMutation = (
  todoId,
  additionalOpts = {}
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: commentsQueries.byTodoId(todoId),
    mutationFn: removeComment,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: commentsQueries.byTodoId(todoId)});
    },
    // ...commonMutationConfig,
    ...additionalOpts
  });
}