import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {requestEmployees, updateEmployee, addEmployee} from './acitons';

const mapStateToProps = (state) => {
  return {
    employees: state.requestEmployees.employees,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestEmployees: () => dispatch(requestEmployees()),
    updateEmployee: (employee) => dispatch(updateEmployee(employee)),
    addEmployee: (employee) => dispatch(addEmployee(employee))
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestEmployees();
    this.props.updateEmployee({
      _id: '5bdf76b34a85e05617a23ec8',
      name: {
        first: 'Fred',
        last: 'Pumpkin'
      }
    })
    this.props.addEmployee({
      "name": {
        "first": "Pumpkin",
        "last": "Fish"
      },
      "location": {
        "city": "Portland",
        "state": "Oregon"
      },
      "phone": "4739483059",
      "email": "pumpkin.fish@gmail.com",
      "picture": "https://robohash.org/pumpkinfish",
    })
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
