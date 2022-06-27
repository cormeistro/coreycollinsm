import './contactSection.css';
import { ContactForm } from '../../components';


const ContactSection = () => {
    return (
        <div className="contact-section" id="contact-section">
            <div className="contact-left">
                <h6>Ready to talk?</h6>
                <h3>Let's connect.</h3>
            </div>
            <ContactForm />
        </div>
    );
}
 
export default ContactSection;