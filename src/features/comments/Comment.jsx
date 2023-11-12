import React from 'react';

import './Comment.css';

export const Comment = ({comment, onCommentRemove}) => {
  return <li className="comment-item">
    <h3>{comment.name}</h3>
    <p>{comment.body}</p>
    <button className="remove-button" onClick={() => onCommentRemove(comment.id)}>❌</button>
  </li>;
}