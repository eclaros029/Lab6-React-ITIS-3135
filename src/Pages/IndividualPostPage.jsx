import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogPost from "../Components/BlogPost/BlogPost";

function IndividualPostPage() {
    const { postId } = useParams();

    const [post, setPost] = useState(null);
    const [author, setAuthor] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchPostData = async () => {
            try {
                setLoading(true);
                setError(null);

                const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                const postData = postResponse.data;
                setPost(postData);

                if (postData.userId) {
                    const [userResponse, commentsResponse] = await Promise.all([
                        axios.get(`https://jsonplaceholder.typicode.com/users/${postData.userId}`),
                        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                    ]);
                    
                    setAuthor(userResponse.data);
                    setComments(commentsResponse.data);
                }

            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPostData();
    }, [postId]);

    if (loading) {
        return <p>Loading post...</p>;
    }

    if (error) {
        return <p>Error fetching post: {error.message}</p>;
    }
    
    if (!post || !author) {
        return <p>Post not found.</p>;
    }

    return <BlogPost post={post} author={author} comments={comments} />;
}

export default IndividualPostPage;
