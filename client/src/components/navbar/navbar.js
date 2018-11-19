import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
      return (
        <div className="navBar">
          <div>
            <Link to="/">
              <h1 className="title"> Employee Directory</h1>
            </Link>
          </div>
          <div>
            <Link to="/addEmployee">
              <button className="ui blue button">Add Employee</button>
            </Link>
          </div>
        </div>
      )
    }
  }

export default Navbar;