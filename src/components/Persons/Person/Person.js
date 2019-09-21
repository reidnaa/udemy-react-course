import React, { Component } from "react";
import Aux from '../../../hoc/Aux';
import classes from './Person.css';
import withClass from '../../../hoc/withClass.js'



class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");

    return (
      <Aux>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        <p>Hi My name is {this.props.name}</p>
        <p>I am {this.props.age} years old</p>
        <button onClick={this.props.click}>X</button>
      </Aux>
    );
  }
}
export default withClass(Person, classes.personCard);
