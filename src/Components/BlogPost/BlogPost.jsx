import React from "react";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

function BlogPost({ post, user, comments, onAddComment }) {
    return (
        <article className="post-card">
            <header>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </header>

            <section className="post-meta">
                <p><strong>Author:</strong> {user ? user.name : "Unknown"}</p>
                <p><strong>Email:</strong> {user ? user.email : "N/A"}</p>
            </section>

            <section className="comments">
                <h3>Comments</h3>
                <CommentForm onAddComment={onAddComment} />
                <CommentList comments={comments} />
            </section>
        </article>
    );
}

export default BlogPost;
