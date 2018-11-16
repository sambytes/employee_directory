import React from "react";
import {form, label, input} from 'semantic-ui-react';

const AddEmployee = () => {
    return (
        <form className="ui form">
            <h4 className="ui diving header">Employee Information</h4>
            <div className="field">
                <label>Name</label>
                <div className="two fields">
                    <div className="field">
                        <input type="text" name="firstName" placeholder="First Name"></input>
                    </div>
                    <div className="field">
                        <input type="text" name="lastName" placeholder="Last Name"></input>
                    </div>
                </div>
            </div>
            <div className="field">
                <label>Location</label>
                <div className="two fields">
                    <div className="field">
                        <input type="text" name="city" placeholder="City"></input>
                    </div>
                    <div className="field">
                        <input type="text" name="state" placeholder="State"></input>
                    </div>
                </div>
            </div>
            <div className="field">
                <label>Phone</label>
                <input type="text" name="phone" placeholder="Phone"></input>
            </div>
            <div className="field">
                <label>Email</label>
                <input type="text" name="phone" placeholder="Phone"></input>
            </div>
            <div className="field">
                <label>Picture (picture must be url)</label>
                <input type="text" name="phone" placeholder="Phone"></input>
            </div>
        </form>
    )
}

export default AddEmployee