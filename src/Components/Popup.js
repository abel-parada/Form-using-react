import React from 'react';

const Popup = (props) => {
    return (
        <div>
            <div id="popup">
                <p>Firstname: {props.firstname}</p>
                <p>Lastname: {props.lastname}</p>
                <p>Phone Number: {props.phonenumber}</p>
                <p>Role: {props.role}</p>
                <p>Message: {props.message}</p>
                <button type="submit" id="reload">Reload application</button>
            </div>
        </div>
    );
};

export default Popup;