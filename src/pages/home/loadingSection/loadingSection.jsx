import './loadingSection.css';

const LoadingSection = () => {
    return (
        <div className="loading-section section">
            <div className="loading">
                <div className="loading-text">
                    <h1>Searching...</h1>
                    <h2>Looking for an <span>adventurous</span> job in tech.</h2>
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