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
    background: '#375a7f',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Lato, Verdana, Helvetica Neue'
  }

  const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  }

export default Header;