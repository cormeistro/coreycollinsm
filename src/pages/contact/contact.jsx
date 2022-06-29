import './contact.css';
import { SubmitButton } from '../../components';

const Contact = () => {
    return (
        <div className="contact-page-section">
            <div className="contact-page-cta">
                <h2>Ready to talk?</h2>
                <h1>Let's connect.</h1>
            </div>
            <div className="contact-page-form">
                <h1 className="t-gradient">Send me a Message</h1>
                <form className="contact-page-fields" action="https://formsubmit.co/d222330845785974f1cff4f1f9ebc372" method="POST">
                    <div className="contact-page-row">
                        <h2><sup>*</sup>Full Name</h2>
                        <input type="text" id="contact-page-name" name="name" placeholder="John Smith" required></input>
                    </div>
                    <div className="contact-page-row">
                        <h2><sup>*</sup>Email</h2>
                        <input type="email" id="contact-page-email" name="email" placeholder="firstlast@email.com" required></input>
                    </div>
                    <div className="contact-page-row">
                        <h2><sup>*</sup>Message</h2>
                        <textarea id="contact-page-message" maxLength={"200"} name="message" placeholder="I have a question about..." rows="5" required />
                    </div>
                    <SubmitButton fill="bright" text="Send Message" />
                </form>
            </div>
        </div>
    );
}
 
export default Contact;