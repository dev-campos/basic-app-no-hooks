import React, {Component} from 'react';
import "./App.css";
import Cockpit from "../../components/Cockpit/Cockpit"
import Persons from "../../components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      {
        id: "key1",
        name: "Daniel",
        age: "28"
      }, {
        id: "key2",
        name: "John",
        age: "30"
      }, {
        id: "key3",
        name: "Doe",
        age: "60"
      }
    ],
    show: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const pers = [...this.state.persons];
    pers[personIndex] = person;

    this.setState({persons: pers});
  };

  togglePersonsHandler = () => {
    this.setState({
      show: !this.state.show
    })
  };

  deletePersonHandler = id => {
    console.log(id);
    const pers = [...this.state.persons].filter(person => {
      return person.id !== id;
    });
    this.setState({persons: pers})
  };

  render() {
    let people = null;

    if (this.state.show) {
      people = <Persons persons={this.state.persons} click={this.deletePersonHandler} changed={this.nameChangedHandler}/>;
    }
    return (<div className="App">
      <Cockpit togglePersonsHandler={this.togglePersonsHandler} show={this.state.show}/> {people}
    </div>);
  }

}

export default App;
