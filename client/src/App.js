import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
import './App.css';
import {connect} from 'react-redux';
import {requestEmployees, updateEmployee, addEmployee, deleteEmployee} from './acitons';
import AppTable from './components/app-table';
import AddEmployee from './components/add-employee';
import EmployeeDetail from './components/employee-detail';
import 'semantic-ui-css/semantic.min.css';

const mapStateToProps = (state) => {
  return {
    employees: state.requestEmployees.employees,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestEmployees: () => dispatch(requestEmployees()),
    updateEmployee: (employee) => dispatch(updateEmployee(employee)),
    addEmployee: (employee) => dispatch(addEmployee(employee)),
    deleteEmployee: (employee) => dispatch(deleteEmployee(employee))
  }
}

class App extends Component {

  componentDidMount() {
    this.props.requestEmployees();
  }

  render() {
    const {employees} = this.props;
    console.log('xxx', employees);
    if (employees.length > 0) {
      return (
        <div className="App">
          <div className="navBar">
            <h1> Employee Directory</h1>
            <Button> Add User </Button>
          </div>
          <AppTable data={employees} />
          <AddEmployee></AddEmployee>
          <EmployeeDetail employee={employees[0]}></EmployeeDetail>
        </div>
      );
    } else {
      return (
        <h1> Loading </h1>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
