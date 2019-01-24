import React, { Component } from 'react';
import classes from './App.module.css';

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
        <header className={classes.header}>
          <h1>This people come from postgres db and node hapijs server</h1>
        </header>
        {peoples}
      </div>
    );
  }
}

export default App;
