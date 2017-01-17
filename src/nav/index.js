// External
import React from 'react';
import { Link } from 'react-router'


// Component definition
class Nav extends React.Component {
  render() {
    const currentPage = window.location.href;

    const links = [
      <li className={currentPage.endsWith('home') ? 'active nav-link' : 'nav-link'}>
        <Link to="/home">Home</Link>
      </li>,
      <li className={currentPage.endsWith('resume') ? 'active nav-link' : 'nav-link'}>
        <Link to="/resume">Resume</Link>
      </li>,
    ];

    return (
      <div className="nav-container">
        <nav role="navigation" className="link-container">
          <ul className="nav-link-list" id="menu">
            {links}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
