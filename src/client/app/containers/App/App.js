import React, { Component } from 'react';
import styles from './App.scss';
// import CharacterForm from '../../components/CharacterForm/CharacterForm';
import Navbar from '../../components/Navbar/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.app}>
        <Navbar />
      </div>
    );
  }
}

export default App;
