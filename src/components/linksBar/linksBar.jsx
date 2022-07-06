import './linksBar.css';
import { githubURL, instagramURL, linkedInURL, twitterURL } from '../../links';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const LinksBar = () => {
    return (
        <div className="links-bar-comp">
            <a href={twitterURL} rel="noreferrer" target="_blank"><BsTwitter /></a>
            <a href={instagramURL} rel="noreferrer" target="_blank"><BsInstagram /></a>
            <a href={githubURL} rel="noreferrer" target="_blank"><BsGithub /></a>
            <a href={linkedInURL} rel="noreferrer" target="_blank"><BsLinkedin /></a>
        </div>
    );
}
 
export default LinksBar;