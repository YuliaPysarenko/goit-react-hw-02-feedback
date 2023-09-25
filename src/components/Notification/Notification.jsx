import PropTypes from 'prop-types';

function Notification({message}) {
    return (
        <div>
            <p>{message}</p>
        </div>
    ); 
}

Notification.propType = {
    message: PropTypes.string.isRequired,
}
export default Notification;