import React from 'react';

const Form = (props) => {
    return (
        <div>
            <form id="form">
                <label>Firstname</label>
                <input name="Firstname" type="text"></input>
                <label>Lastname</label>
                <input name="Lastname" type="text"></input>
                <label>Phone number</label>
                <input name="Phone number" type="text"></input>
                <label>Role</label>
                <input name="Role" type="dropdown"></input>
                <label>Message</label>
                <input name="Message" type="text"></input>
            </form>
        </div>
    );
};

export default Form;