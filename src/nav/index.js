// External dependencies
import React from 'react';
import { Link } from 'react-router'


// Component definition
class Nav extends React.Component {
  render() {
    const currentPage = window.location.href;

    const links = [
      <li className={currentPage.endsWith('home') ? 'active nav-link' : 'nav-link'}>
        <Link to="/home">home</Link>
      </li>,
      <li className={currentPage.endsWith('resume') ? 'active nav-link' : 'nav-link'}>
        <Link to="/resume">Resume</Link>
      </li>,
    ];

    return (
      <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div
          className="collapse navbar-collapse" id="bs-example-navbar-collapse-1"
        >
          <ul
            className="nav navbar-nav navbar-left"
            id="menu"
          >
            {links}
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
