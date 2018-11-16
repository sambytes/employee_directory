import React from "react";
import {Field, reduxForm} from 'redux-form';

let AddEmployee = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} className="form">
        <div className="field">
          <div className="control">
            <label className="label">First Name</label>
            <Field className="input" name="firstName" component={renderField} type="text" placeholder="First Name"/>
          </div>
        </div>
    
        <div className="field">
          <div className="control">
            <label className="label">Last Name</label>
            <Field className="input" name="lastName" component={renderField} type="text" placeholder="Last Name"/>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="label">City</label>
            <Field className="input" name="city" component={renderField} type="number" placeholder="City"/>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="label">State</label>
            <Field className="input" name="state" component={renderField} type="number" placeholder="State"/>
          </div>
        </div>
    
        <div className="field">
          <div className="control">
            <label className="label">Email</label>
            <Field className="input" name="email" component={renderField} type="email" placeholder="Email Address"/>
          </div>
        </div>
    
        <div className="field">
          <div className="control">
            <label className="label">Phone</label>
            <Field className="input" name="phone" component={renderField} type="email" placeholder="Phone number"/>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="label">Picture *input url only</label>
            <Field className="input" name="picture" component={renderField} type="picture" placeholder="Picture"/>
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
    const errors = {};
    if (!val.firstName) {
      console.log('First Name is required');
      errors.firstName = 'Required';
    }
    if (!val.lastName) {
      console.log('Last Name is required');
      errors.lastName = 'Required';
    }
    if (!val.email) {
      console.log('email is required');
      errors.email = 'Required';
    } else if (!/^.+@.+$/i.test(val.email)) {
      console.log('email is invalid');
      errors.email = 'Invalid email address';
    }
    
    return errors;
  };
  
  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <div className="control">
        <label className="field">{label}</label>
        <input className="input" {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

AddEmployee = reduxForm({
    form: 'addEmployee',
    validate
  })(AddEmployee);

export default AddEmployee