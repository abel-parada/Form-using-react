import React from 'react';

const Form = ({submit, change}) => {
    return (
        <div>
            <form id="form" onSubmit={submit}>
                <div>
                    <label htmlFor="firstname">Firstname</label>
                    <input name="firstname" type="text" id="firstname" required onChange={change}></input>
                </div>

                <div>
                    <label htmlFor="lastname">Lastname</label>
                    <input name="lastname" type="text" id="lastname" required onChange={change}></input>
                </div>

                <div>
                    <label htmlFor="phonenumber">Phone number</label>
                    <input  name="phonenumber" type="phone" id="phonenumber" required onChange={change}></input>
                </div>

                <div>
                    <label htmlFor="role">Role</label>
                    <select name="role" id="role" required onChange={change}>
                        <option>Student</option>
                        <option>Teacher</option>
                        <option>Random</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message">Why do you want money?</label>
                    <textarea name="message" type="text" id="message" onChange={change}></textarea>
                </div>

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Form;