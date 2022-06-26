const TopBar = () => {
    return (
        <div className="top-bar" id="top-bar">
            <div className="logo">
                <a href="#bar-notification"><h3 className="t-gradient">Corey Collins, M.</h3></a>
            </div>
            <nav className="blip">
                <ul>
                    <li><a href="#languages-banner">About Me</a></li>
                    <li><a href="#certs-banner">Certifications</a></li>
                    <li><a href="#jobs-banner">Work History</a></li>
                </ul>
            </nav>
            <div className="bg-gradient blip btn-contact">
                <div className="bg-light border-gradient-inner">
                    <a href="#contact-banner"><button className="t-gradient">Contact Me</button></a>
                </div>
            </div>
            {/* <div className="hamburger-menu">
                <i className="fa-solid fa-bars"></i>
            </div> */}
        </div>
    );
}
 
export default TopBar;