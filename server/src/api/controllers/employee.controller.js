'use strict';

var employeeService = require('../services/employee.service');
var util = require('util');

module.exports = {
  addEmployee: addEmployee
};

function addEmployee(req, res) {
  var employee = req.swagger.params.employee.value;
  employeeService.addUser(employee);
  res.json(employee);
}