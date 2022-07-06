import './languagesSection.css';

const LanguagesSection = () => {
    return (
        <div className="bg-glass languages-section section-margin section-padding section-border-radius">
            <div className="languages-section-title">
                <h1>Languages</h1>
            </div>
            <div className="languages-section-row">
                <div className="language-details">
                    <div className="language-bar orange" />
                    <div className="language">
                        <h1>HTML / CSS</h1>
                        <h2>Advanced</h2>
                    </div>
                </div>
                <div className="language-right">
                    10+ Years
                </div>
            </div>
            <div className="languages-section-row">
                <div className="language-details">
                    <div className="language-bar yellow" />
                    <div className="language">
                        <h1>JavaScript</h1>
                        <h2>Intermediate</h2>
                    </div>
                </div>
                <div className="language-right">
                    1+ Years
                </div>
            </div>
            <div className="languages-section-row">
                <div className="language-details">
                    <div className="language-bar blue" />
                    <div className="language">
                        <h1>React JS</h1>
                        <h2>Intermediate</h2>
                    </div>
                </div>
                <div className="language-right">
                    3+ Months
                </div>
            </div>
            <div className="languages-section-row">
                <div className="language-details">
                    <div className="language-bar green" />
                    <div className="language">
                        <h1>Node / Express</h1>
                        <h2>Journeyman</h2>
                    </div>
                </div>
                <div className="language-right">
                    1+ Months
                </div>
            </div>
            <div className="languages-section-row">
                <div className="language-details">
                    <div className="language-bar purple" />
                    <div className="language">
                        <h1>SQL & NOSQL</h1>
                        <h2>Journeyman</h2>
                    </div>
                </div>
                <div className="language-right">
                    1+ Months.
                </div>
            </div>
        </div>
    );
}
 
export default LanguagesSection;