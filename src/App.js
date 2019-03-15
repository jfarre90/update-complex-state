import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    
    setTimeout(() => {
      const randomInstructorIndex = Math.floor(Math.random()*this.state.instructors.length);
      const randomHobbyIndex = Math.floor(Math.random()*this.state.instructors[randomInstructorIndex]);
      
      const instructors = this.state.instructors.slice();
      //we could be tempted to now use instructors[randomInstructorIndex].hobbies.splice(hobbyIndex, 1), because we have made the instructors copy, but this AFFECTS the original state due to the splice method. Never use splice when changing states (reference is the SAME object).
      instructors[randomInstructorIndex] = Object.assign({}, instructors[randomInstructorIndex]); //with this we create another reference so we can mess with it
      
      instructors[randomInstructorIndex].hobbies = instructors[randomInstructorIndex].hobbies.slice(); //the hobbies is still using the original reference, hence why we need to create a copy
      instructors[randomInstructorIndex].hobbies.splice(randomHobbyIndex, 1);
      this.setState({instructors});
    },5000) // Using arrow function to preserve the "this" definition.
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;