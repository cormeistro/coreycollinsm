import React from 'react';
import './navBar.css';
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';

const NavBar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);

    const Menu = () => {
        return (
            <ul>
                <a className="active" href="/"><li>Home</li></a>
                <a href="/work"><li>Work</li></a>
                <a href="/about"><li>About</li></a>
                <a href="/contact"><li>Contact</li></a>
            </ul>
        );
    }
    
    return (
        <div className="nav-bar-comp">
            <div className="nav-bar-comp-full">
                <Menu />
            </div>
            <div className="nav-bar-comp-small">
                {toggleMenu
                    ? <RiCloseLine onClick={() => setToggleMenu(false)} />
                    : <RiMenu2Line onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="nav-bar-comp-small-menu">
                        <Menu />
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default NavBar;