import React, { useState } from 'react';
import { FiX, FiAlignRight } from 'react-icons/fi';
import './navBar.css';

const Menu = () => {
    return (
        <>
        <a href="/"><li>About Me</li></a>
        <li style={{cursor: "not-allowed", textDecoration: "line-through"}}>Certifications</li>
        <li style={{cursor: "not-allowed", textDecoration: "line-through"}}>Work History</li>
        <li style={{cursor: "not-allowed", textDecoration: "line-through"}}>Projects</li>
        </>
    );
}

const NavBar = () => {
    
    const [toggleMenu, setToggleMenu] = useState(false);
    
    return (
        <div className="navbar">
            <div className="nav-full">
                <ul>
                    <Menu />
                </ul>
            </div>
            <div className="hamburger">
                {toggleMenu
                ? <FiX onClick={() => setToggleMenu(false)} />
                : <FiAlignRight onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="nav-small">
                        <ul>
                            <Menu />
                            <a href="/contact"><li>Contact</li></a>
                        </ul>
                    </div>
                )}
            </div>
            
        </div>
    );
}
 
export default NavBar;