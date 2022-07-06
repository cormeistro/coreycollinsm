import './bottomBar.css';
import { ImHome, ImTrophy, ImBriefcase, ImSphere } from 'react-icons/im';


const BottomBar = () => {
    return (
        <div className="bg-glass bottom-bar-section">
            <div className="bottom-bar-links">
                <ImHome className="bottom-bar-active" />
                <ImTrophy />
                <ImBriefcase />
                <ImSphere />
            </div>
        </div>
    );
}
 
export default BottomBar;