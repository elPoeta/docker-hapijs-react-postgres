import React, { Component } from 'react';
import classes from './App.module.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import AddPeople from './components/addPeople/AddPeople';

class App extends Component {
  state = {
    peoples: []
  }
  async componentDidMount() {
    const response = await fetch('http://0.0.0.0:5000/api/peoples');
    const data = await response.json();
    const peoples = data.peoples;
    this.setState({ peoples })
  }
  addPeople = people => {
    people.id = Math.random();
    const peoples = [...this.state.peoples, people];

    this.setState({ peoples });
  }
  render() {
    const peoples = this.state.peoples.map(people => {
      return (
        <div key={people.id}>
          <span>Name: {people.first_name}  ||  e-mail: {people.email}</span>
        </div>
      )
    });

    return (
      <div className={classes.App}>
        <BrowserRouter>
          <div className={classes.App}>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
          </div>
        </BrowserRouter>
        <hr />
        {peoples}
        <AddPeople addPeople={this.addPeople} />
      </div>
    );
  }
}

export default App;
