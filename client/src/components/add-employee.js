import React from "react";
import { Field, reduxForm } from 'redux-form';
import { get } from 'lodash';

let AddEmployee = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="field">
                <div className="control">
                    <label className="label">First Name</label>
                    <Field className="input" name="name.first" component={renderField} type="text" placeholder="First Name" />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <label className="label">Last Name</label>
                    <Field className="input" name="name.last" component={renderField} type="text" placeholder="Last Name" />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <label className="label">City</label>
                    <Field className="input" name="location.city" component={renderField} type="text" placeholder="City" />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <label className="label">State</label>
                    <Field className="input" name="location.state" component={renderField} type="text" placeholder="State" />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <label className="label">Email</label>
                    <Field className="input" name="email" component={renderField} type="email" placeholder="Email Address" />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <label className="label">Phone</label>
                    <Field className="input" name="phone" component={renderField} type="text" placeholder="Phone number" />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <label className="label">Picture, valid photo url path only</label>
                    <Field className="input" name="picture" component={renderField} type="picture" placeholder="Picture" />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </form>
    )
}

const validate = val => {
    const errors = {
        name: {
            first: '',
            last: ''
        },
        location: {
            city: '',
            state: '',
        },
        email: '',
        phone: '',
        picture: '',
    };
    console.log('eee', val);
    if (!get(val, 'name.first')) {
        console.log('First Name is required');
        errors.name.first = 'Required';
    } else {
        errors.name.first = '';
    }
    if (!get(val, 'name.last')) {
        console.log('Last Name is required');
        errors.name.last = 'Required';
    } else {
        errors.name.last = ''
    }
    if (!get(val, 'location.city')) {
        console.log('City is required');
        errors.location.city = 'Required';
    } else {
        errors.location.city = '';
    }
    if (!get(val, 'location.state')) {
        console.log('State is required');
        errors.location.state = 'Required';
    } else {
        errors.location.state = '';
    }
    if (!val.email) {
        console.log('email is required');
        errors.email = 'Required';
    } else if (!/^.+@.+$/i.test(val.email)) {
        console.log('email is invalid');
        errors.email = 'Invalid email address';
    }
    if (!val.phone) {
        errors.phone = 'Required'
    } else if (!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(val.phone)) {
        errors.phone = 'Invalid phone number, must be in format xxx-xxx-xxxx';
    }
    if (!val.phone) {
        errors.phone = 'Required'
    } else if (!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(val.phone)) {
        errors.phone = 'Invalid phone number, must be in format xxx-xxx-xxxx';
    }
    const validatePicture = new RegExp('(?:[a-z0-9-]+.)+[a-z]{2,6}(?:/[^/#?]+)+.(?:jpg|gif|png)$')
    if (!validatePicture.test(val.picture)) {
        errors.picture = 'Picture field must be valid url path to ending with .jpg, .gif, or .png';
    }

    return errors;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <div className="control">
            <label className="field">{label}</label>
            <input className="input" {...input} placeholder={label} type={type} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

AddEmployee = reduxForm({
    form: 'addEmployee',
    validate
})(AddEmployee);

export default AddEmployee