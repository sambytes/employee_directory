import React, { Component } from "react";
import { Form, Text, Scope } from 'informed';
import { get } from 'lodash';
import './add-employee.css';
import { withRouter } from 'react-router-dom';

class AddEmployee extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.setFormApi = this.setFormApi.bind(this);
    }

    handleSubmit() {
        const formState = this.formApi.getState().values;
        this.props.onSubmit(formState)
        this.props.history.push(`/`);
    }

    setFormApi(formApi) {
        this.formApi = formApi;
    }

    render() {

        // Field Validation
        const requiredValidation = (value) => {
            return !value ? 'Field is required' : null;
        }

        const phoneValidation = (value) => {
            if (value) {
                return !/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(value) ? 'Phone number must be in format xxx-xxx-xxxx' : null;
            } else {
                return 'Field is required'
            }
        }

        const emailValidation = (value) => {
            if (value) {
                return !/^.+@.+$/i.test(value) ? 'Email is invalid' : null;
            } else {
                return 'Field is required'
            }
        }

        const photoValidation = (value) => {
            if (value) {
                return !/[A-Za-z0-9]+\.(png|gif|jpe?g)$/.test(value) ? 'Phone url must end with .jpg .gif or .png' : null;
            } else {
                return null;
            }
        }

        return (
            <div>
                <h3>Add Employee</h3>
                <Form onSubmit={this.handleSubmit} getApi={this.setFormApi} id="add-employee">
                    {({ formState }) => (
                        <div className="addEmployeeForm">
                            <Scope scope="name">
                                <label htmlFor="add-employee-firstName">First Name: <span className="error">{get(formState, 'errors.name.first')}</span></label>
                                <Text field="first" value="Jane" validate={requiredValidation} placeholder="First Name" />
                                <label htmlFor="add-employee-lastName">Last Name: <span className="error">{get(formState, 'errors.name.last')}</span></label>
                                <Text field="last" validate={requiredValidation} placeholder="Last Name" />
                            </Scope>

                            <Scope scope="location">
                                <label htmlFor="add-employee-city">City: <span className="error">{get(formState, 'errors.location.city')}</span></label>
                                <Text validate={requiredValidation} field="city" placeholder="City" />
                                <label htmlFor="add-employee-state">State: <span className="error">{get(formState, 'errors.location.state')}</span></label>
                                <Text field="state" validate={requiredValidation} placeholder="State" />
                            </Scope>

                            <label htmlFor="add-employee-phone">Phone: <span className="error">{get(formState, 'errors.phone')}</span></label>
                            <Text field="phone" validate={phoneValidation} placeholder="Phone" />

                            <label htmlFor="add-employee-email">Email: <span className="error">{get(formState, 'errors.email')}</span></label>
                            <Text field="email" validate={emailValidation} placeholder="Email" />

                            <label htmlFor="add-employee-picture">Photo Url: <span className="optional">*optional</span><span className="error">{get(formState, 'errors.picture')}</span></label>
                            <Text field="picture" validate={photoValidation} placeholder="Picture" />
                            <div>
                                <button type="submit" className="ui green button">Submit</button>
                            </div>
                        </div>
                    )}
                </Form>
            </div>
        )
    }
}

export default withRouter(AddEmployee);