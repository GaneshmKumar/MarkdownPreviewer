import React, { Component } from 'react';
import './NavBar.scss';

class NavBar extends Component {
  render () {
    return (
      <nav className="nav-bar">
        <div className="app-title">Markdown</div>
      </nav>
    );
  }
}

export default NavBar;
