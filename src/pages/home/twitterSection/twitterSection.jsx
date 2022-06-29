import './twitterSection.css';
import { BsTwitter } from 'react-icons/bs';
import { twitterURL } from '../../../links';

const TwitterSection = () => {
    return (
        <div className="twitter-section section">
            <div className="twitter">
                <BsTwitter />
                <h1>Tracked progress.</h1>
                <h2>You can view my <span>entire</span> journey at <a href={twitterURL} rel="noreferrer" target="_blank"><span>@coreycollinsm</span></a>.</h2>
            </div>
        </div>
    );
}
 
export default TwitterSection;