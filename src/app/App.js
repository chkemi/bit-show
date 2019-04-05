import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/shows/LandingPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route path='/' component={LandingPage} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
