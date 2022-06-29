import './submitButton.css';

const SubmitButton = (props) => {
    return (
        <div className="submit-button">
            <a href={props.url}>
                <div className="bg-gradient submit-button-outer ">
                    <div className={"submit-button-inner " + props.fill}>
                            <button>{props.text}</button>
                    </div>
                </div>
            </a>
        </div>
    );
}
 
export default SubmitButton;