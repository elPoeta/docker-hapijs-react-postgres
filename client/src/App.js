import React, { Component } from 'react';
import classes from './App.module.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import People from './components/people/People';

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <BrowserRouter>
          <div className={classes.App}>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/people' component={People} />
            <Route path='/about' component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
