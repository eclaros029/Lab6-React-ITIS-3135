import React from 'react';

function CommentForm() {
  return (
    <form className="comment-form">
      <textarea 
        placeholder="Add a comment"
        //style={{}} add syling here
      />
      <button 
        type="submit"
        //style={{}} add syling here
      >
        Submit
      </button>
    </form>
  );
}

export default CommentForm;