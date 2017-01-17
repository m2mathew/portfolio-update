// External dependencies
import React from 'react';
import {
  hashHistory,
  IndexRoute,
  Link,
  Route,
  Router,
} from 'react-router'

// Internal dependencies
import './App.css';
import Nav from './nav';
import Title from './title';


const App = () => (
  <main>
    <Nav />
    <Title />
  </main>
);

export default App;
