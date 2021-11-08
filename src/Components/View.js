import React from 'react';

const View = (props) => {

    // props is a placeholder. ex: {this.firstname}
    return (
        <div id="wrapper">
            <h1>This is your input</h1>
            <div id="list">
                <div id="lines">
                    <p>Firstname: {props.firstname}</p>
                    <p>Lastname: {props.lastname}</p>
                    <p>Phone Number: {props.phonenumber}</p>
                    <p>Role: {props.role}</p>
                    <p>Message: {props.message}</p>
                </div>
            </div>
        </div>
    );
};

export default View;