import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';

class Nav extends React.Component {
  componentWillMount() {
    console.log('hello', this.props);
    this.props.router.on('route', () => {
      this.forceUpdate();
    });
  }

  componentDidMount() {
    $(document).ready(function(){
      $('.dropdown-toggle').dropdown();
    })
  }

  render() {
    const currentPage = Backbone.history.getFragment();

    const links = [
      <li
        className={currentPage === '' ? 'active nav-link' : 'nav-link'}
        key="home"
      >
        <a href="#">home</a>
      </li>,
      <li
        className={currentPage === 'resume' ? 'active nav-link' : 'nav-link'}
        key="resume"
      >
        <a href="#resume">resume</a>
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
