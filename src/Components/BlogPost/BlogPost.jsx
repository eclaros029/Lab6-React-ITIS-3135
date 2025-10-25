import React from "react";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

function BlogPost({ post }) {
    const { title, content, author, date } = post;

    return (
        <article className="post-card">
            <header>
                <h2>{title}</h2>
                <p>{content}</p>
            </header>

            <section className="post-meta">
                <p><strong>Author:</strong> {author}</p>
                <p><strong>Date:</strong> {date}</p>
            </section>

            <section className="comments">
                <h3>Comments</h3>
                <CommentForm />
                <CommentList />
            </section>
        </article>
    );
}

export default BlogPost;
