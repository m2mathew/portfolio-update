// External
import React from 'react';
import {
  IndexRoute,
  Route,
} from 'react-router'

// Internal
import About from './about';
import Resume from './resume';
import Root from './root';


// Router definition
export default (
	<Route path="/" component={Root}>
		<IndexRoute component={About} />
		<Route path="home" component={About} />
		<Route path="resume" component={Resume} />
	</Route>
);
