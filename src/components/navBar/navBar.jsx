import React from 'react';
import './navBar.css';
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';

const NavBar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);

    const Menu = () => {
        return (
            <ul>
                <a className={setStyle('/')} href="/"><li>Home</li></a>
                <a className={setStyle('/work')} href="/work"><li>Work</li></a>
                <a className={setStyle('/certificates')} href="/certificates"><li>Certificates</li></a>
                <a className={setStyle('/about')} href="/about"><li>About</li></a>
                <a className={setStyle('/contact')} href="/contact"><li>Contact</li></a>
            </ul>
        );
    }

    const setStyle = (page) => {
        if (page === window.location.pathname) return 'active';
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