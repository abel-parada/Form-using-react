import React from 'react';

const Popup = ({firstname, lastname, phonenumber, role, message, post}) => {

    const closeHandler = (event) => {
        event.preventDefault();
        window.location.reload();
      }

    return (
        <div className="overlay">
            <div className="popup">
                <h2>Your Note:</h2>
                <p>Firstname: {firstname}</p>
                <p>Lastname: {lastname}</p>
                <p>Phone Number: {phonenumber}</p>
                <p>Role: {role}</p>
                <p>Why do you want money?: {message}</p>
                <button type="submit" id="reload" onClick={post}>YES, I am sure</button>
                <button type="submit" id="reload2" onClick={closeHandler}>NOPE, don't want to post it</button>                
            </div>
        </div>
    );
};

export default Popup;