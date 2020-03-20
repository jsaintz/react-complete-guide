import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Cintia', age: 25 },
      { name: 'Bob', age: 27 },
      { name: 'Dai', age: 22 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'teste';
    this.setState({
      persons: [
        { name: 'Nelson', age: 21 },
        { name: 'Ana', age: 37 },
        { name: 'Thaty', age: 26 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hoobies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does This Work Nows²³'));
  }
}

export default App;
