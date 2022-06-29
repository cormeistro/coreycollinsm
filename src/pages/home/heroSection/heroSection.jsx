import './heroSection.css';
import { SubmitButton } from '../../../components';
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { githubURL, instagramURL, linkedInURL, twitterURL } from '../../../links';

const HeroSection = () => {
    return (
        <div className="hero-section section">
            <div className="hero-slogan">
                <h1>Junior Developer.</h1>
                <h1>This is my journey.</h1>
            </div>
            <div className="hero-quote">
                <h2>I spent 10 years as a Project Manager.</h2>
                <h2>Now, I learn full stack development.</h2>
                <h2>Searching for my first tech job.</h2>
            </div>
            <div className="hero-links">
                <SubmitButton text="Contact Me" url="/contact" />
                <div className="hero-links-socials">
                    <a href={instagramURL} rel="noreferrer" target="_blank"><BsInstagram /></a>
                    <a href={twitterURL} rel="noreferrer" target="_blank"><BsTwitter /></a>
                    <a href={linkedInURL} rel="noreferrer" target="_blank"><BsLinkedin /></a>
                    <a href={githubURL} rel="noreferrer" target="_blank"><BsGithub /></a>
                </div>
            </div>
        </div>
    );
}
 
export default HeroSection;