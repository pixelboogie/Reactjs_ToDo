import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (

        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/build">Home</Link> | <Link style={linkStyle} to="/about">About</Link> 
        </header>
    )

}

const headerStyle = {
    background: '#c4c4c4',
    color: 'blue',
    textAlign: 'center',
    padding: '20px'
  }

  const linkStyle = {
      color: 'blue',
      textDecoration: 'none'
  }

export default Header;