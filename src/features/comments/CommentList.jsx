import React from 'react';
import {useCommentsQuery} from "./queries";
import {Comment} from "./Comment";
import {useRemoveCommentMutation} from "./mutations";

export const CommentList = ({todoId}) => {
  const { isPending, isError, isSuccess, data } = useCommentsQuery(todoId);
  const removeCommentMutation = useRemoveCommentMutation(todoId);

  return <>
    {isPending && <div>Loading comments...</div>}

    {isError && <div>Error loading comments...</div>}

    {isSuccess && <>
      <h3>Comments:</h3>
      <ul>
        {data.map(comment => <Comment
          key={comment.id}
          comment={comment}
          onCommentRemove={(id) => removeCommentMutation.mutate(id)}
        />)}
      </ul>
    </>}
  </>
};