import React from "react";
import './employee-detail.css';

const EmployeeDetail = ({employee}) => {
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
                    <div>{employee.location.city}, {employee.email}</div>
                </div>
                <div className="informationDetail">
                    <div className="informationTitle">Phone</div>
                    <div>{employee.location.city}, {employee.phone}</div>
                </div>
            </div>
            <button className="ui red button">Delete Employee</button>
        </div>
    )
}

export default EmployeeDetail