// External dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  browserHistory,
  IndexRoute,
  Link,
  Route,
  Router,
} from 'react-router'

// Internal dependencies
import About from './about';
import App from './App';
import Resume from './resume';
import './index.css';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={About} />
      <Route path="home" component={About} />
      <Route path="resume" component={Resume} />
    </Route>
  </Router>,
  document.getElementById('root')
);

// Render the entire app
// ReactDOM.render(
//   <App router={r} />,
//   document.getElementById('root')
// );
