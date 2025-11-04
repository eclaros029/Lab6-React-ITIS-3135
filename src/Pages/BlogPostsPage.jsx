import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BlogPostsPage() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <p>Loading posts...</p>;
    }

    if (error) {
        return <p>Error fetching posts: {error.message}</p>;
    }

    return (
        <div className="blog-posts-list">
            <h1>All Blog Posts</h1>
            {posts.map(post => (
                <article key={post.id} className="post-card" style={{ marginBottom: '1.5rem' }}>
                    <header>
                        <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
                        <p>{post.body.substring(0, 100)}...</p>
                    </header>
                    <section className="post-meta">
                        <Link to={`/post/${post.id}`} className="read-more">Read More →</Link>
                    </section>
                </article>
            ))}
        </div>
    );
}

export default BlogPostsPage;