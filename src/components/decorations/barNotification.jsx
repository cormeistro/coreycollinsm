const BarNotification = (props) => {
    return (
        <div className="bar-notification bg-gradient" id="bar-notification">
            <p>Please note that the Contact Me buttons are not functioning at this time as this site is still under development as a personal project.</p>
            <button onClick={props.onDismiss}>Dismiss</button>
        </div>
    );
}
 
export default BarNotification;