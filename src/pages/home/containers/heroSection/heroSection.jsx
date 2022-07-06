import './heroSection.css';
import { instagramURL } from '../../../../links';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <h1>Hi, I'm <span>Corey</span>.</h1>
            <h2>Web Developer | Project Manager | Photographer</h2>
            <div className="hero-section-cta">
                <a href="/certificates"><button>Certificates</button></a>
                <a href={instagramURL} rel="noreferrer" target="_blank"><button>My Photography</button></a>
            </div>
        </div>
    );
}
 
export default HeroSection;