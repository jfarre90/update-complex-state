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
      
      const instructors = this.state.instructors.map((inst,i) => {
        if (i === randomInstructorIndex) {
          const hobbies = [...inst.hobbies]; //the spread does the same as inst.hobbies.slice();
          hobbies.splice(randomHobbyIndex,1);
          return{
            ...inst,
          };
        }
        
        return inst;

      });
      this.setState({instructors});
    },5000); // Using arrow function to preserve the "this" definition.
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