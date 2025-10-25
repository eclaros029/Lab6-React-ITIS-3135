import React from "react";

function CommentForm() {
  return (
    <form className="comment-box">
      <textarea placeholder="Write a comment..." />
      <button type="submit">Post</button>
    </form>
  );
}

export default CommentForm;
