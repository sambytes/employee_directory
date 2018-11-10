var Employee = require('../models/employee');

const EmployeeService = {
    
    addEmployee(employee) {
        let employeeSchema = new Employee();
        employee = Object.assign(employeeSchema, employee);
        employee.save((err) => {
            if (err) return new Error('Error adding user');
        });
        return employee;
    },

    getEmployees() {
        return Employee.find({}, (err, data) => {
            if (err) return new Error('Error getting employees');
            return JSON.stringify(data);
        });
    },

    updateEmployee(employee) {
        return Employee.findOneAndUpdate({_id: employee._id}, {$set: employee}, (err, employee) => {
            if (err) return new Error('Error updating employee');
            return JSON.stringify(employee);
        });
    },

    deleteEmployee(id) {
        return Employee.findByIdAndRemove(id).exec();
    }
}

module.exports = EmployeeService;