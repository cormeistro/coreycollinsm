import './button.css';

const Button = (props) => {
    return (
        <a href={props.url}>
            <button>{props.text}</button>
        </a>
    );
}
 
export default Button;