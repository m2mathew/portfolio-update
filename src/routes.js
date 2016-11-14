// External dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';

// Internal dependencies
import Home from './main-content-container';
// import Nav from './nav';
import Resume from './resume';


const app = document.getElementById('app');


// Router definition
const Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'resume': 'resume'
	},
	home: function() {
		ReactDOM.render(
			<Home />, app
		);
	},
	resume: function() {
		ReactDOM.render(
			<Resume />, app
		);
	},
});

export default Router;
