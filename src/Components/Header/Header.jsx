import React from "react";

function Header()
{
    return (
        <header className="blog-header" 
        style={{
            backgroundColor: "#282c34",
            color: "white",
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <h1 className="blog-title" style={{margin: 0, fontSize: '1.5rem'}}>
                My Blog
            </h1>
        </header>
    );
}