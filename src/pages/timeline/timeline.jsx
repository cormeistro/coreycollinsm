import './timeline.css';
import { Chrono } from "react-chrono";
import TimelineData from '../../data/timeline';

const Timeline = () => {

    const timelineData = TimelineData;

    return (
        <div className="timeline-page">
            <div className="timeline-container">
                <div className="timeline-title">
                    <h1>Timeline</h1>
                </div>
                <Chrono
                lineWidth="1"
                allowDynamicUpdate="true"
                items={timelineData}
                mode="VERTICAL"
                hideControls="true"
                theme={{
                    primary: 'var(--gray-bright)',
                    secondary: 'var(--accent-bright)',
                    cardBgColor: 'var(--accent-dark)',
                    cardForeColor: 'var(--gray-bright)',
                    titleColor: 'var(--accent-bright)',
                    titleColorActive: 'var(--gray-dark)',
                }}
                />
            </div>
        </div>
    );
}
 
export default Timeline;