import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import LandingPage from './components/LandingPage'
import Header from './components/Header';
import About from './components/Tabs/About';
import Contact from './components/Tabs/Contact';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={LandingPage} />
        </div>
      </Router>
    )
  };
};

export default App;
