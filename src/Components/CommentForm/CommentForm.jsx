import React, { useState } from "react";

function CommentForm({ onAddComment }) {
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!name || !text) {
            return;
        }

        onAddComment({ name, text });

        setName("");
        setText("");
    };

    return (
        <form className="comment-box" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea 
                placeholder="Write a comment..." 
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <button type="submit">Post</button>
        </form>
    );
}

export default CommentForm;