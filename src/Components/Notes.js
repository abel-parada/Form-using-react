import React from 'react';

const Notes = ({id, firstname, lastname, phonenumber, role, message}) => {
    return (
        <div className="notewrapper">
            <div className="notes">
                <h3>Note {id}: Who wants the money this time?</h3> 
                <p><strong>Name: </strong>{firstname} {lastname}</p>
                <p><strong>Role: </strong>{role}</p>
                <p><strong>Contact: </strong>{phonenumber}</p>
                <p><strong>Why? </strong>{message}</p>
            </div>
        </div>
    );
};

export default Notes;