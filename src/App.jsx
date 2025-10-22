import React from "react";
import BlogPost from './Components/BlogPost/BlogPost';

function App() {
    const mainPost = {
        title: "My First Blog Post",
        content: "This is the content of the blog post. Welcome to my blog! Hope you enjoy reading it.",
        author: "John Doe",
        date: '2025-10-22',
    };

    return (
        <div className="app-container">
            <main className="main-content"
                //style={{add syling here}}
            >
                <BlogPost post={mainPost} />
            </main>
        </div>
    );
}

export default App;