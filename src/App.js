import React, { Component } from "react";
import "./App.css";
// import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components'
import Person from "./Person/Person";

const StyledButton = styled.button`
      background-color: lightcoral;
      color: gray;
      font: inherit;
      border: 1px solid red;
      padding: 8px;
      cursor: pointer;
      
      &:hover {
        background-color: red;
        color: white;
        transition: all .3s ease-in-out;
        border: 1px solid #fff;
      }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'a1', name: "Max", age: 29 },
      { id: 'b2', name: "Harry", age: 30 },
      { id: 'c3', name: "John", age: 31 },
    ],
    otherState: "other state",
    showPersons: false,
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
      persons: [
        { name: "MAX", age: 39 },
        { name: event.target.value, age: 40 },
        { name: "JOHN", age: 41 },
      ],
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState = ({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons; // doesShow = false;
    this.setState({ showPersons: !doesShow }); // then adjust the state => showPersons = true
  };

  render() {
    const style = {
      backgroundColor: 'lightcoral',
      color: 'gray',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: "red",
        color: 'white',
        transition: 'all .3s ease-in-out',
        border: '1px solid #fff'
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}

        </div>
      );

      style.backgroundColor = 'lightgreen';
      style[':hover'] = {
        backgroundColor: "salmon",
        color: 'white',
        transition: 'all .3s ease-in-out',
        border: '1px solid #fff'
      }
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red' ,'bold']
    }

    return (
      <div className="App">
        <h1 className={classes}> React App</h1>
        <StyledButton onClick={this.togglePersonsHandler}>Switch name</StyledButton>

        {persons}
      </div>
    );
  }
}

export default App;
// export default Radium(App);

// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     // "useState" always return an array. In this case, exactly 2 elements. Always!!!
//     persons: [
//       { name: "Max", age: 29 },
//       { name: "Harry", age: 30 },
//       { name: "John", age: 31 },
//     ],
//     otherState: "other state",
//   });

//   // const [firstElement, secondElement] = useState()

//   // first element (persons Object) will always be current state
//   // &
//   // second element is a function that allows to update this state and will re-render components

//   console.log(personsState);
//   const handLingEvent = (newName) => {
//     // this.state.persons[0].name = this.state.persons[1].name; => DO NOT do this
//     this.setPersonsState({
//       persons: [
//         { name: "MAX", age: 39 },
//         { name: "HARRY", age: 40 },
//         { name: "JOHN", age: 41 },
//       ],
//       otherState: personsState.otherState
//     });
//   };

//   return (
//     <div className="App">
//       <h1> React App</h1>
//       <button onClick={handLingEvent}>Switch name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//         clickMe={handLingEvent}>My hobbies: Playgame, sports,.. </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };

// export default App;
