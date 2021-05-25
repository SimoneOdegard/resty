import React from 'react';
import './style/header.scss';

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <header>
          <h1 id="restyHeader">RESTy App</h1>
        </header>
      </div>
    )
  }
}

export default Header;