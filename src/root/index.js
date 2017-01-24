// External dependencies
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';

// Internal dependencies
import '../App.css';
import Nav from '../nav';
import Title from '../title';
import theme from './theme';
import StyleGuide from '../style-guide';


// Local variables
const muiTheme = getMuiTheme(theme);


// Component definition
const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <main>
      <Nav />
      <Title />
      <StyleGuide />
    </main>
  </MuiThemeProvider>
);

export default App;
