'use strict';

var employeeService = require('../services/employee.service');
var util = require('util');

module.exports = {
  addEmployee: addEmployee,
  getEmployees: getEmployees,
  updateEmployee: updateEmployee,
  deleteEmployee: deleteEmployee,
};

function addEmployee(req, res) {
  var employee = req.swagger.params.employee.value;
  var savedEmployee = employeeService.addEmployee(employee);
  res.json(savedEmployee);
}

function getEmployees(req, res) {
  employeeService.getEmployees().then((employees) => {
    res.json(employees);
  })
};

function updateEmployee(req, res) {
  var employee = req.swagger.params.employee.value;
  employeeService.updateEmployee(employee).then((employee) => {
    res.json(employee);
  })
};

function deleteEmployee(req, res) {
  var id = req.swagger.params.id.value;
  var employee = employeeService.deleteEmployee(id).then((employee) => {
    res.json(employee);
  })
} 
