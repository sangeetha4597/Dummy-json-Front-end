import React from 'react';
import { Link } from 'react-router-dom';
// import "../"; // Additional styles for the header

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 style={{color:"#f3f3f3"}}>Dummy API Service</h1>
                <nav>
                    <ul>
                    <li><Link to="/home">Home</Link></li>
                        <li><Link to="/">APIs</Link></li>
                        <li><Link to="/documentation">Documentation</Link></li>
                        {/* <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li> */}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
