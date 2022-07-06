import './vennSection.css';

const VennSection = () => {
    return (
        <div className="bg-glass section-border-radius section-margin section-padding venn-section">
            <div className="venn-section-container">
                <div className="venn-section-circle circle1">
                    <h1>Web<br />Developer</h1>
                </div>
                <div className="venn-section-circle circle2">
                    <h1>Project<br />Manager</h1>
                </div>
                <div className="venn-section-circle circle3">
                    <h1>Designer</h1>
                </div>
            </div>
        </div>
    );
}
 
export default VennSection;