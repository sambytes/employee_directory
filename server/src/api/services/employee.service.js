var Employee = require('../models/employee');

const EmployeeService = {
    
    addUser(user) {
        let employee = new Employee();
        employee = Object.assign(employee, user);
        employee.save(err => {
          if (err) { return false }
      });
    }
}

module.exports = EmployeeService;