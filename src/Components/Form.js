import React from 'react';

const Form = (props) => {
    return (
        <div>
            <form id="form">
                <div>
                    <label htmlFor="firstname">Firstname</label>
                    <input name="firstname" type="text" id="firstname" required onChange={props.change}></input>
                </div>

                <div>
                    <label htmlFor="lastname">Lastname</label>
                    <input name="lastname" type="text" id="lastname" required onChange={props.change}></input>
                </div>

                <div>
                    <label htmlFor="phonenumber">Phone number</label>
                    <input  name="phonenumber" type="phone" id="phonenumber" required onChange={props.change}></input>
                </div>

                <div>
                    <label htmlFor="role">Role</label>
                    <select name="role" id="role" required onChange={props.change}>
                        <option>Student</option>
                        <option>Teacher</option>
                        <option>Random</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" type="text" id="message" onChange={props.change}></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;