import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/shows/LandingPage';
import SingleShowPage from './components/shows/SingleShowPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route path='/show/:id' component={SingleShowPage} />
            <Route path='/' component={LandingPage} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
