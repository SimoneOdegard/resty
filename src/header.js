import React from 'react';
import './style/header.scss';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <header>
          <h1 id="restyHeader">RESTy</h1>
        </header>

        <nav>
          <ul>
            <li className="liHeader">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="liHeader">
              <NavLink to="/history">History</NavLink>
            </li>
            <li className="liHeader">
              <NavLink to="/help">Help</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;