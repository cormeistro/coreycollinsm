import './heroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <h1>Hi, I'm Corey.</h1>
            <h2>Web Developer | Project Manager | Photographer</h2>
            <div className="hero-section-cta">
                <a href="/certificates"><button>Certificates</button></a>
                <a href="/contact"><button>Contact Me</button></a>
            </div>
        </div>
    );
}
 
export default HeroSection;