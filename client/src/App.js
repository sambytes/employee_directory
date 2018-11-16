import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
import './App.css';
import {connect} from 'react-redux';
import {requestEmployees, updateEmployee, addEmployee, deleteEmployee} from './acitons';
import AppTable from './components/app-table';
import AddEmployee from './components/add-employee';
import EmployeeDetail from './components/employee-detail';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

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

  handleAddEmployee = values => {
    console.log(values);
  }

  render() {
    const {employees} = this.props;
    console.log('xxx', employees);
    if (employees.length > 0) {
      return (
        <Router>
        <div className="App">
            <div className="navBar">
              <Link to="/">
                <h1 className="title"> Employee Directory</h1>
              </Link>
              <Link to="/addUser">
                <Button> Add User </Button>
              </Link>
            </div>
            {employees && (
              <Route exact={true} path="/" render={() => (
                <AppTable data={employees}></AppTable>
              )}/>
            )}
            <Route path="/addUser" render={() => (
              <AddEmployee onSubmit={this.handleAddEmployee}></AddEmployee>
            )}/>
            <Route path="/employee/:employeeId" render={({match}) => (
              <EmployeeDetail employee={employees.find((e) => e._id === match.params.employeeId)}></EmployeeDetail>
            )}/>
          </div>
        </Router>
      );
    } else {
      return (
        <h1> Loading </h1>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
