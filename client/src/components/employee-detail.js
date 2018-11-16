import React from "react";
import './employee-detail.css';

const EmployeeDetail = ({employee}) => {
    console.log('yyy', employee);
    return (
        <div className="container">
            <img alt="employee" src={employee.picture}></img>
            <div className="employeeInformation">
                <div>
                    <h5>{employee.name.first} {employee.name.last}</h5>
                </div>
                <div class="ui divider"></div>
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
            <button class="ui red button">Delete Employee</button>
        </div>
    )
}

export default EmployeeDetail