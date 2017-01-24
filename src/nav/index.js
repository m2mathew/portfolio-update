// External
import { indigo900 } from 'material-ui/styles/colors';
import { Link } from 'react-router'
import { Tabs, Tab } from 'material-ui/Tabs';
import LaptopMacIcon from 'material-ui/svg-icons/hardware/laptop-mac';
// import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import MicIcon from 'material-ui/svg-icons/av/mic';
import React from 'react';

// Local variables
const tabStyle = {
  backgroundColor: '#fff',
  color: indigo900,
};


// Component definition
class Nav extends React.Component {
  render() {
    const currentPage = window.location.href;

    const links = [
      <Tab
        className={currentPage.endsWith('home') ? 'active nav-link' : 'nav-link'}
        icon={<MicIcon />}
        label="Home"
        style={tabStyle}
      >
        <Link to="/home">Home</Link>
      </Tab>,
      <Tab
        className={currentPage.endsWith('resume') ? 'active nav-link' : 'nav-link'}
        icon={<LaptopMacIcon />}
        label="Resume"
        style={tabStyle}
        >
        <Link to="/resume">Resume</Link>
      </Tab>,
    ];

    return (
      <div className="nav-container">
        <nav role="navigation" className="link-container">
          <Tabs className="nav-link-list" id="menu">
            {links}
          </Tabs>
        </nav>
      </div>
    );
  }
}

export default Nav;
