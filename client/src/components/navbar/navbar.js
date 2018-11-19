import React, {Component} from "react";
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
            <Link to="/addUser">
              <button className="ui blue button">Add User</button>
            </Link>
          </div>
        </div>
      )
    }
  }

export default Navbar;