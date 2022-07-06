import './jobsSection.css';
import { JobsComponent } from '../../components';

const Jobs = () => {
    return (
        <div className="jobs-section">
            <div className="jobs-section-title">
                <h1>Work History</h1>
            </div>
            <div className="jobs-section-border" />
            <JobsComponent />
        </div>
    );
}
 
export default Jobs;