import './contactButton.css';
import { BsFillChatDotsFill } from 'react-icons/bs';

const ContactButton = (props) => {
    return (
        <div className="bg-glass contact-button-comp" onClick={props.onClick}>
            <BsFillChatDotsFill />
        </div>
    );
}
 
export default ContactButton;