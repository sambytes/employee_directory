import React, { Component } from "react";
import './employee-detail.css';
import {withRouter} from 'react-router-dom';

class EmployeeDetail extends Component {

    handleClick(employeeId, deleteUser) {
        deleteUser(employeeId);
        this.props.history.push(`/`);
    }
     
    render() {
        const {employee, onDeleteUser} = this.props;
        return (
            <div className="container">
                <img alt="employee" src={employee.picture}></img>
                <div className="employeeInformation">
                    <div>
                        <h3>{employee.name.first} {employee.name.last}</h3>
                    </div>
                    <div className="ui divider"></div>
                    <div className="informationDetail">
                        <div className="informationTitle">Location</div>
                        <div>{employee.location.city}, {employee.location.state}</div>
                    </div>
                    <div className="informationDetail">
                        <div className="informationTitle">Email</div>
                        <div>{employee.email}</div>
                    </div>
                    <div className="informationDetail">
                        <div className="informationTitle">Phone</div>
                        <div>{employee.phone}</div>
                    </div>
                    <div className="delete">
                        <button className="ui red button" onClick={() => this.handleClick(employee._id, onDeleteUser)}>Delete Employee</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(EmployeeDetail);