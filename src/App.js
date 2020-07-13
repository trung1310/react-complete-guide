import React from "react";
// import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
import { Component } from "react";

class App extends Component{
  state = {
        persons: [
          {name: 'Max', age:29},
          {name: 'Harry', age:30},
          {name: 'John', age:31}
        ],
        otherState: "other state",
        year: 1990
      }

  handLingEvent = (newName) => {
    // this.state.persons[0].name = this.state.persons[1].name; => DO NOT do this
    this.setState({
      persons: [
        {name: newName, age:39},
        {name: 'HARRY', age:40},
        {name: 'JOHN', age:41}
      ]
    });
  }

  newChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'MAX', age:39},
        {name: event.target.value, age:40},
        {name: 'JOHN', age:41}
      ]
    });
  }

  render(){
    return (
      <div className="App">
        <h1> React App</h1>
        <button onClick={this.handLingEvent.bind(this, 'MAX')}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        clickMe={this.handLingEvent.bind(this, 'Maxxxx')}
        changed={this.newChangeHandler}>CLICK ME</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;

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
