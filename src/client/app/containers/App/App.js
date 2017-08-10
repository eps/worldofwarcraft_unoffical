import React, { Component } from 'react';
import './App.scss';
import CharacterForm from '../../components/CharacterForm/CharacterForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Now</h2>
        </div>
        <CharacterForm />
      </div>
    );
  }
}

export default App;
