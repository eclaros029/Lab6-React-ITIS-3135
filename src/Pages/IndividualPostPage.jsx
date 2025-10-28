import React, { useState } from "react";
import BlogPost from "../Components/BlogPost/BlogPost";

const postData = {
    id: 1,
    title: "My First Blog Post",
    content: "Welcome to my blog! This is my first post. I hope you enjoy reading it. Below, you can see the comment system in action. Try leaving a comment!",
    author: "John Doe",
    date: "2025-10-22",
};

const initialComments = [
    { id: 1, name: "Alice", text: "I really enjoyed reading this post." },
    { id: 2, name: "Bob", text: "Great content, thanks for sharing!" },
];

function IndividualPostPage() {
    const [comments, setComments] = useState(initialComments);

    const handleAddComment = (newComment) => {
        const commentWithId = {
            ...newComment,
            id: Date.now()
        };
        setComments([...comments, commentWithId]);
    };

    return (
        <BlogPost 
            post={postData} 
            comments={comments} 
            onAddComment={handleAddComment} 
        />
    );
}

export default IndividualPostPage;