import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BlogPost from "../Components/BlogPost/BlogPost";

const posts = [
    {
        id: 1,
        title: "My First Blog Post",
        content: "Welcome to my blog! This is my first post. I hope you enjoy reading it.",
        author: "John Doe",
        date: "2025-10-22",
    },
    {
        id: 2,
        title: "Learning React Router",
        content: "Today I'm implementing React Router to create a multi-page blog.",
        author: "Jane Doe",
        date: "2025-10-28",
    },
    {
        id: 3,
        title: "Mastering React Router",
        content: "Today I'm mastering React Router to improve a multi-page blog.",
        author: "Matthew Doe",
        date: "2025-10-31",
    }
];

const initialComments = [
    { id: 1, name: "Alice", text: "I really enjoyed reading this post." },
    { id: 2, name: "Bob", text: "Great content, thanks for sharing!" },
];

function IndividualPostPage() {
    const { postId } = useParams();
    const post = posts.find(p => p.id === Number(postId));
    const [comments, setComments] = useState(initialComments);

    const handleAddComment = (newComment) => {
        const commentWithId = { ...newComment, id: Date.now() };
        setComments([...comments, commentWithId]);
    };

    return <BlogPost post={post} comments={comments} onAddComment={handleAddComment} />;
}

export default IndividualPostPage;
