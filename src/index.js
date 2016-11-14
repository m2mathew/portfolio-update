// External dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import $ from 'jquery';

// Internal dependencies
import App from './App';
import './index.css';
import Router from './routes';


// inject jQuery into app
window.$ = require('jquery');
window.jQuery = $;


let r = Router;
Backbone.history.start();


// Render the entire app
ReactDOM.render(
  <App router={r} />,
  document.getElementById('root')
);
