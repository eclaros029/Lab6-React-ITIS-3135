import React from "react";
import { Link } from "react-router-dom";

const posts = [
    {
        id: 1,
        title: "My First Blog Post",
        author: "John Doe",
        date: "2025-10-22",
        excerpt: "Welcome to my blog! This is my first post. I hope you enjoy reading it."
    },
    {
        id: 2,
        title: "Learning React Router",
        author: "Jane Doe",
        date: "2025-10-28",
        excerpt: "Today I'm implementing React Router to create a multi-page blog."
    },
    {
        id: 3,
        title: "Mastering React Router",
        author: "Matthew Doe",
        date: "2025-10-31",
        excerpt: "Today I'm mastering React Router to improve a multi-page blog."
    }
];

function BlogPostsPage() {
    return (
        <div className="blog-posts-list">
            <h1>All Blog Posts</h1>
            {posts.map(post => (
                <article key={post.id} className="post-card" style={{ marginBottom: '1.5rem' }}>
                    <header>
                        <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
                        <p>{post.excerpt}</p>
                    </header>
                    <section className="post-meta">
                        <p><strong>Author:</strong> {post.author}</p>
                        <p><strong>Date:</strong> {post.date}</p>
                    </section>
                </article>
            ))}
        </div>
    );
}

export default BlogPostsPage;
