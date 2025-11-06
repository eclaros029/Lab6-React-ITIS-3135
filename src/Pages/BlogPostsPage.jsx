import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BlogPostsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data.slice(0, 10)));
    }, []);

    return (
        <div className="blog-posts-list">
            <h1>All Blog Posts</h1>
            {posts.map(post => (
                <article key={post.id} className="post-card" style={{ marginBottom: "1.5rem" }}>
                    <header>
                        <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
                        <p>{post.body.substring(0, 100)}...</p>
                    </header>
                    <section className="post-meta">
                        <p><strong>Author ID:</strong> {post.userId}</p>
                        <p><strong>Post ID:</strong> {post.id}</p>
                    </section>
                </article>
            ))}
        </div>
    );
}

export default BlogPostsPage;
