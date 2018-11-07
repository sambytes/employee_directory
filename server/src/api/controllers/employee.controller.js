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
  employeeService.updateEmployee(employee).then((employees) => {
    res.json(employees);
  })
};

function deleteEmployee(req, res) {
  res.json({})
}