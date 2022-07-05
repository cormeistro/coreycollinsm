import './loadingSection.css';

const LoadingSection = () => {
    return (
        <div className="loading-section section">
            <div className="loading">
                <div className="loading-text">
                    <h1>I'm Searching...</h1>
                    <h2>For my first job as a front-end developer. <br /><span>Take a chance</span> on me.</h2>
                </div>
                <div className="progress-container">
                    <div className="progress-back">
                        <div className="bg-gradient progress-inner">
                            <h3>75%</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LoadingSection;