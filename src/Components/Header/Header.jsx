import React, { useState } from "react";

function Header() {
    const [lightMode, setLightMode] = useState(false);

    const toggleTheme = () => {
        setLightMode(!lightMode);
        document.body.className = lightMode ? "" : "light";
    };

    return (
        <header className="site-header">
            <h1 className="site-title">My Personal Blog</h1>
            <nav className="main-nav">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
            <button onClick={toggleTheme} className="theme-btn">
                {lightMode ? "Dark Mode" : "Light Mode"}
            </button>
        </header>
    );
}

export default Header;
