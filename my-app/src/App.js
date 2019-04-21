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
  addPerson = (person) => {
    console.log(person);
    person.id = Math.random();
    let newData = [...this.state.data, person];
    this.setState({
      data: newData
    })
  }
  deletePerson = (id) => {
    console.log(id);
    let newData = this.state.data.filter(person => {
      return person.id !== id;
    })
    this.setState({
      data: newData
    })

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Welcome in React World!</h1>
        <SimpleFirst deletePerson={this.deletePerson} data={this.state.data} />
        <AddPerson addPerson={this.addPerson} />
      </div>
    );
  }
}

export default App;
