const TopBar = () => {
    return (
        <div className="top-bar" id="top-bar">
            <div className="logo">
                <h3 className="t-gradient">Corey Collins, M.</h3>
            </div>
            <nav className="blip">
                <ul>
                    <li><a href="#languages-banner">About Me</a></li>
                    <li><a href="#" className="inactive">My History</a></li>
                    <li><a href="#" className="inactive">Current Projects</a></li>
                </ul>
            </nav>
            <div className="bg-gradient blip btn-contact">
                <div className="bg-light border-gradient-inner">
                    <button className="t-gradient">Contact Me</button>
                </div>
            </div>
            <div className="hamburger-menu">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    );
}
 
export default TopBar;