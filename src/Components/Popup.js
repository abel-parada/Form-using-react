import React from 'react';

const Popup = (props) => {

    const closeHandler = (event) => {
        event.preventDefault();
        window.location.reload();
      }

    return (
        <div className="overlay">
            <div className="popup">
                <h2>Your Note:</h2>
                <p>Firstname: {props.firstname}</p>
                <p>Lastname: {props.lastname}</p>
                <p>Phone Number: {props.phonenumber}</p>
                <p>Role: {props.role}</p>
                <p>Message: {props.message}</p>
                <button type="submit" id="reload" onClick={closeHandler}>YES, I am sure</button>
                <button type="submit" id="reload2" onClick={closeHandler}>NOPE, don't want to post it</button>                
            </div>
        </div>
    );
};

export default Popup;