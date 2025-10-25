import React from "react";

const comments = [
  { id: 1, text: "This is the first comment." },
  { id: 2, text: "I really enjoyed reading this post." },
  { id: 3, text: "Great content, thanks for sharing!" },
];

function CommentList() {
  return (
    <div className="comment-section">
      <ul className="comment-items">
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
