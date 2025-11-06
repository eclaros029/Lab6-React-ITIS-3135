import React, { useState } from "react";
import axios from "axios";

function CommentForm({ postId, onAddComment }) {
    const [name, setName] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !body) {
            alert("Please fill in both fields");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
                name: name,
                body: body
            });

            onAddComment(response.data);
            setName("");
            setBody("");
        } catch (error) {
            console.error("Error posting comment:", error);
        } finally {
            setLoading(false);
        }
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
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? "Posting..." : "Post"}
            </button>
        </form>
    );
}

export default CommentForm;
