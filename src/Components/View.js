import React from 'react';

const View = ({firstname, lastname, phonenumber, role, message}) => {

    // props is a placeholder. ex: {this.firstname}
    return (
        <div id="wrapper">
            <h1>This is your input</h1>
            <div id="list">
                <div id="lines">
                    <p>Firstname: <span>{firstname}</span></p>
                    <p>Lastname: <span>{lastname}</span></p>
                    <p>Phone Number: <span>{phonenumber}</span></p>
                    <p>Role: <span>{role}</span></p>
                    <p>Message: <span>{message}</span></p>
                </div>
            </div>
        </div>
    );
};

export default View;