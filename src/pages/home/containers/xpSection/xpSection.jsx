import './xpSection.css';
import { ImUserTie } from 'react-icons/im';

const XpSection = () => {
    return (
        <div className="bg-glass section-border-radius section-margin section-padding xp-section">
            <div className="xp-section-left">
                <h2>Over</h2>
                <h1>10 years</h1>
                <h3>Experience as a PM</h3>
            </div>
            <div className="xp-section-right">
                <ImUserTie />
            </div>
        </div>
    );
}
 
export default XpSection;