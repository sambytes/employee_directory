import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {requestEmployees, updateEmployee, addEmployee, deleteEmployee} from './acitons';

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
    this.props.deleteEmployee('5be889ea13a110469b8de1a5');
  }

  render() {
    const {employees} = this.props;
    console.log('xxx', employees);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
