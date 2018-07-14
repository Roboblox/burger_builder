import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
    this.state = {
      persons: [
        { id: "qwe", name: "Max", age: 28 },
        { id: "fwfw", name: "Manu", age: 29 },
        { id: "sehd", name: "Stephanie", age: 26 }
      ],
      otherState: "some other value",
      showPersons: false
    };
  }

  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount()");
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Persons.js] Inside componentWillReceiveProps",
      nextProps
    );
  }

  render() {
    console.log("[Persons.js] Inside render()");

    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
