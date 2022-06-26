import './topBar.css';

const TopBar = () => {
    return (
        <div className="top-bar" id="top-bar">
            <div className="logo">
                <a href="#hero-section"><h3 className="t-gradient">Corey Collins, M.</h3></a>
            </div>
            <nav className="blip">
                <ul>
                    <li><a href="#languages-section">About Me</a></li>
                    <li><a href="#certs-section">Certifications</a></li>
                    <li><a href="#work-history-section">Work History</a></li>
                </ul>
            </nav>
            <div className="bg-gradient blip btn-contact">
                <div className="bg-light border-gradient-inner">
                    <a href="#contact-section"><button className="t-gradient">Contact Me</button></a>
                </div>
            </div>
        </div>
    );
}
 
export default TopBar;