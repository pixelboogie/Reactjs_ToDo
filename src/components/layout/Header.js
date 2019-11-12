import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link to="/about"></Link>
        </header>
    )

}

const headerStyle = {
    background: '#333',
    color: '#FF0000',
    textAlign: 'center',
    padding: '20px'
  }

  const linkStyle = {
      color: '#fff',
      textDecoration: 'none'
  }

export default Header;