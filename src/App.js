import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonState] = useState({
    persons: [
      { name: 'Cintia', age: 25 },
      { name: 'Bob', age: 27 },
      { name: 'Dai', age: 22 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'teste';
    setPersonState({
      persons: [
        { name: 'Nelson', age: 21 },
        { name: 'Ana', age: 37 },
        { name: 'Thaty', age: 26 }
      ],
      otherState: personsState.otherState
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a react App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hoobies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does This Work Nows²³'));
};

export default App;
