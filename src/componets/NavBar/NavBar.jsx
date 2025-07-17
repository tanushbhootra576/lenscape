import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ toggle }) => {
    return (
        <header className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="logo">
                    Lenscape
                </NavLink>

                <div className="hamburger" onClick={toggle}>
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                </div>
            </div>
        </header>
    );
};

export default NavBar;
