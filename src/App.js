import React, { Component } from "react";
import Persons from "./components/Persons/Persons";
import Cockpit from "./components/Cockpit";
import withClass from "./hoc/withClass";
import classes from "./App.css";
import Aux from './hoc/Aux.js';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      {
        id: "001",
        name: "reid",
        age: 34
      },
      {
        id: "002",
        name: "max",
        age: 91
      },
      {
        id: "003",
        name: "Dale",
        age: 45
      },
      {
        id: "004",
        name: "Hank",
        age: 46
      }
    ],
    isShowing: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.isShowing;
    this.setState({
      isShowing: !doesShow
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  render() {
    console.log("[App.js] render()");
    let persons = null;

    if (this.state.isShowing) {
      persons = (
        <div className="people">
          <Persons
            clicked={this.deletePersonHandler}
            persons={this.state.persons}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <Aux  >
        <button
          onClick={() => {
            this.setState({
              showCockpit: !this.state.showCockpit
            });
          }}
        >
          remove/show cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            toggle={this.togglePersonsHandler}
          />
        ) : null}

        {persons}
      </Aux >
    );
  }
}

export default withClass(App, classes.App);
