import React, {Component} from 'react';
import "./App.css";
import Person from "./Person/Person";

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

  nameChangedHandler = (id, event) => {
    console.log(event.target.value);
    console.log(id);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const pers = [...this.state.persons];
    pers[personIndex] = person;

    this.setState(pers);
  };

  togglePersonsHandler = () => {
    this.setState({
      show: !this.state.show
    })
  };

  deletePersonHandler = id => {
    const pers = [...this.state.persons].filter(person => {
      return person.id !== id;
    });
    this.setState(pers)
  };

  render() {
    let people = null;

    if (this.state.show) {
      people = this.state.persons.map((person, index) => {
        return (<Person key={person.id} name={person.name} age={person.age} click={this.deletePersonHandler.bind(this, person.id)} changed={this.nameChangedHandler.bind(this, person.id)}/>);
      });
    }
    return (<div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {people}
    </div>);
  }

}

export default App;
