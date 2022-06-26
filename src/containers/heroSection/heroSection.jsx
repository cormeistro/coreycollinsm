import './heroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section" id="hero-section">
            <div className="hero-slogan">
                <h1>I don't just code.</h1>
                <h1>I solve problems.</h1>
            </div>
            <div className="hero-quote">
                <p>I spent 10 years as a Project Manager, soaking up all the experience I could. Now, I spend my days learning full stack development and working on projects that bring solutions to real-world problems.</p>
            </div>
            <div className="hero-links">
                <a href="#contact-section"><button className="bg-gradient btn-contact">Contact Me</button></a>
                <a href="http://instagram.com/cormeistro" rel="noreferrer" target="_blank"><i className="fa-brands fa-instagram-square"></i></a>
                <a href="http://twitter.com/cormeistro" rel="noreferrer" target="_blank"><i className="fa-brands fa-twitter-square"></i></a>
                <a href="https://www.linkedin.com/in/corey-collins-925314154/" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/cormeistro" rel="noreferrer" target="_blank"><i className="fa-brands fa-github-square"></i></a>
            </div>
        </div>
    );
}
 
export default HeroSection;