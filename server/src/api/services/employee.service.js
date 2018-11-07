var Employee = require('../models/employee');

const EmployeeService = {
    
    addUser(user) {
        let employee = new Employee();
        employee = Object.assign(employee, user);
        employee.save(err => {
          if (err) { return false }
      });
    },

    getEmployees() {
        return Employee.find((err, data) => {
            if (err) return { success: false, error: err };
            return JSON.stringify(data);
        });
    }
}

module.exports = EmployeeService;