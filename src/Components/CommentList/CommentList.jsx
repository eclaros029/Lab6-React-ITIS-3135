import React from 'react';

const staticComments = [
  { id: 1, text: 'Comment 1' },
  { id: 2, text: 'Comment 2' },
  { id: 3, text: 'Comment 3' },
];

function CommentList() {
  return (
    <div className="comment-list-container" 
        //style={{add syling here}}
    >
      <h3>Existing Comments:</h3>
      <ul className="comment-list">
        {staticComments.map(comment => (
          <li key={comment.id}>
            {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;