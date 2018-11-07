'use strict';

var employeeService = require('../services/employee.service');
var util = require('util');

module.exports = {
  addEmployee: addEmployee,
  getEmployees: getEmployees,
  updateEmployee: updateEmployee,
};

function addEmployee(req, res) {
  var employee = req.swagger.params.employee.value;
  employeeService.addUser(employee);
  res.json(employee);
}

function getEmployees(req, res) {
  employeeService.getEmployees().then((employees) => {
    res.json(employees);
  })
};

function updateEmployee(req, res) {
  var employee = req.swagger.params.employee.value;
  employeeService.updateEmployee(employee).then((employees) => {
    res.json(employees);
  })
};