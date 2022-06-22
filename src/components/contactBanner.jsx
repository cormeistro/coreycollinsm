const ContactBanner = () => {
    return (
        <div className="contact-banner" id="contact-banner">
            <div className="contact-left">
                <h6>Ready to talk?</h6>
                <h3>Let's connect.</h3>
            </div>
            <div className="contact-form">
                <h3 className="t-gradient">Send me a Message</h3>
                <form className="contact-fields" action="https://formsubmit.co/d222330845785974f1cff4f1f9ebc372" method="POST">
                    <div className="contact-row">
                        <h5><sup>*</sup>Full Name</h5>
                        <input type="text" id="contact-name" name="name" placeholder="Full Name" required></input>
                    </div>
                    <div className="contact-row">
                        <h5><sup>*</sup>Email</h5>
                        <input type="email" id="contact-email" name="email" placeholder="Email" required></input>
                    </div>
                    <div className="contact-row">
                        <h5><sup>*</sup>Message</h5>
                        <textarea id="contact-message" maxLength={"200"} name="message" placeholder="Type your message here." rows="5" required />
                    </div>
                    <button type="submit" className="contact-submit bg-gradient" id="contact-submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
 
export default ContactBanner;