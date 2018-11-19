import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { requestEmployees, updateEmployee, addEmployee, deleteEmployee } from './acitons';
import AppTable from './components/app-table';
import AddEmployee from './components/add-employee';
import EmployeeDetail from './components/employee-detail';
import NavBar from './components/navbar';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';

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
    const { employees, addEmployee, deleteEmployee } = this.props;
    return (
      <Router>
        {employees.length === 0 && (
          <div className="App">
            <NavBar></NavBar>
            <Switch>
            <Route exact={true} path="/" render={() => (
              <h2>No employees in the directory</h2>
            )} />
            <Route path="/addUser" render={() => (
              <AddEmployee onSubmit={addEmployee}></AddEmployee>
            )} />
            <Route render={() => (
              <Redirect to="/"/>
            )} />
            </Switch>
          </div>
        )

        }
        {employees.length > 0 && (
          <div className="App">
            <NavBar></NavBar>
            <Switch>
            <Route exact={true} path="/" render={() => (
              <AppTable data={employees}></AppTable>
            )} />
            <Route path="/employee/:employeeId" render={({ match }) => (
              <EmployeeDetail employee={employees.find((e) => e._id === match.params.employeeId)} onDeleteUser={deleteEmployee}></EmployeeDetail>
            )} />
            <Route path="/addUser" render={() => (
              <AddEmployee onSubmit={addEmployee}></AddEmployee>
            )} />
            <Route render={() => (
              <Redirect to="/"/>
            )} />
            </Switch>
          </div>
        )}
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
