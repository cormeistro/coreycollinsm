const BarNotification = (props) => {
    return (
        <div className="bar-notification bg-gradient" id="bar-notification">
            <p>{props.message}</p>
            <button onClick={props.onDismiss}>Dismiss</button>
        </div>
    );
}
 
export default BarNotification;