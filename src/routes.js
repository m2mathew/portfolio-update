import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';

import HomeComponent from './HomeComponent';
import NavigationComponent from './NavigationComponent';
import ResumeComponent from './ResumeComponent';


const Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'resume': 'resume'
	},
	home: function() {
		ReactDOM.render(
			<HomeComponent />, app
		);
	},
	resume: function() {
		ReactDOM.render(
			<ResumeComponent />, app
		);
	}
});

export default Router;
