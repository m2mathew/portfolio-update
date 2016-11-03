// External dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// Internal dependencies
import App from './App';
import './index.css';


window.$ = require('jquery');
window.jQuery = $;

// Render the entire app
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
