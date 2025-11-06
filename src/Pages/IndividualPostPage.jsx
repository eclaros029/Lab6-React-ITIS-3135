import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogPost from "../Components/BlogPost/BlogPost";

function IndividualPostPage() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [author, setAuthor] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
                return data.userId;
            })
            .then(userId => {
                fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                    .then(res => res.json())
                    .then(data => setAuthor(data))
                    .finally(() => setLoading(false));
            });
    }, [postId]);

    if (loading) return <h2>Loading...</h2>;

    const postData = {
        title: post.title,
        content: post.body,
        author: author.name,
        date: "N/A",
    };

    return <BlogPost post={postData} comments={[]} onAddComment={() => { }} />;
}

export default IndividualPostPage;
