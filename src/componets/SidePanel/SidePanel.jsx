import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidePanel.css';

const navLinks = [
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
];

const SidePanel = ({ isOpen, toggle }) => {
    if (!isOpen) return null;

    return (
        <>
            <div className="overlay" onClick={toggle}></div>
            <div className="side-panel open">
                <div className="close-btn" onClick={toggle}>×</div>
                <ul className="panel-links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink to={link.path} onClick={toggle}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SidePanel;
