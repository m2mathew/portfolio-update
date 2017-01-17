// External
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  browserHistory,
  Router,
} from 'react-router'

// Internal
import About from './about';
import Resume from './resume';
import routes from './routes';
import './index.css';

// Needed for onTouchTap event handling
injectTapEventPlugin();

// Render the app to the DOM
ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
