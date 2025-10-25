import React from "react";
import Header from "./Components/Header/Header";
import BlogPost from "./Components/BlogPost/BlogPost";
import Footer from "./Components/Footer/Footer";

function App() {
    const mainPost = {
        title: "My First Blog Post",
        content: "Welcome to my blog! This is my first post. I hope you enjoy reading it.",
        author: "John Doe",
        date: "2025-10-22",
    };

    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <BlogPost post={mainPost} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
