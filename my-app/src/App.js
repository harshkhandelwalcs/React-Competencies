import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleFirst from './simpleFirst';
import AddPerson from './AddPerson';
class App extends Component {
  state = {
    data: [
      { name: "Harsh", age: 23, designation: "Software Engineer", id: 1 },
      { name: "Kk", age: 22, designation: "GF", id: 2 },
      { name: "Rahul", age: 23, designation: "Beggar", id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Welcome in React World!</h1>
        <SimpleFirst data={ this.state.data } />
        <AddPerson />
      </div>
    );
  }
}

export default App;
