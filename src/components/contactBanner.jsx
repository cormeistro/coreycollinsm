import SeparatorGradient from "./decorations/separatorGradient";

const ContactBanner = () => {
    return (
        <div className="contact-banner">
            <div className="contact-left">
                <h6>Ready to talk?</h6>
                <h3>Let's connect.</h3>
            </div>
            <div className="contact-form">
                <h3 className="t-gradient">Send me a Message</h3>
                <div className="contact-fields">
                    <div className="contact-row">
                        <h5><sup>*</sup>Full Name</h5>
                        <input type="text" id="contact-name" placeholder="Full Name"></input>
                    </div>
                    <div className="contact-row">
                        <h5><sup>*</sup>Email</h5>
                        <input type="email" id="contact-email" placeholder="Email"></input>
                    </div>
                    <div className="contact-row">
                        <h5><sup>*</sup>Message</h5>
                        <textarea id="contact-message" maxLength={"200"} placeholder="Type your message here." rows="5" />
                    </div>
                    <button className="contact-submit bg-gradient" id="contact-submit">Submit</button>
                </div>
            </div>
        </div>
    );
}
 
export default ContactBanner;