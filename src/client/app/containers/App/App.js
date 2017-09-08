import React, { Component } from 'react';
import styles from './App.scss';
import CharacterForm from '../../components/CharacterForm/CharacterForm';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <h2>Welcome to Now</h2>
        </div>
        <CharacterForm />
      </div>
    );
  }
}

export default App;
