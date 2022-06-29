import './contactSection.css';
import { SubmitButton } from '../../../components';

const ContactSection = () => {
    return (
        <div className="contact-section">
            <div className="contact-cta">
                <h2>Ready to talk?</h2>
                <h1>Let's connect.</h1>
            </div>
            <div className="contact-form">
                <h1 className="t-gradient">Send me a Message</h1>
                <form className="contact-fields" action="https://formsubmit.co/d222330845785974f1cff4f1f9ebc372" method="POST">
                    <div className="contact-row">
                        <h2><sup>*</sup>Full Name</h2>
                        <input type="text" id="contact-name" name="name" placeholder="John Smith" required></input>
                    </div>
                    <div className="contact-row">
                        <h2><sup>*</sup>Email</h2>
                        <input type="email" id="contact-email" name="email" placeholder="firstlast@email.com" required></input>
                    </div>
                    <div className="contact-row">
                        <h2><sup>*</sup>Message</h2>
                        <textarea id="contact-message" maxLength={"200"} name="message" placeholder="I have a question about..." rows="5" required />
                    </div>
                    <SubmitButton fill="bright" text="Send Message" />
                </form>
            </div>
        </div>
    );
}
 
export default ContactSection;