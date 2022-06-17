const TransitionBanner = () => {
    return (
        <div className="transition-banner" id="transition-banner">
            <div className="transition-section">
                <h3>Project Manager</h3>
                <h4>My experience prepared me for this.</h4>
                <p>Wanting to be a programmer my whole life, I fell into the world of Project management. My passion for code was always there, while time flew by and life took over. I've successfully managed 30,000+ projects in the last ten years. For my next project, I'm starting something new.</p>
            </div>
            <i className="blip fa-solid fa-arrow-right transition-arrow"></i>
            <div className="transition-section">
                <h3>Full Stack Developer</h3>
                <h4>Developing full stack methodology.</h4>
                <p>After years of waiting, I stepped out of my comfort zone to pursue a career in programming. With help from some senior developers, I created an educational outline for every topic I would need to get started. Though I'll never stop learning, earning a job in tech is now my public goal. <a className="t-gradient" href="http://twitter.com/cormeistro" target="_blank"><i className="fa-solid fa-globe"></i> Follow my journey</a>.</p>
            </div>
        </div>
    );
}
 
export default TransitionBanner;