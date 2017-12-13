import React, { Component } from 'react';
import styles from './App.scss';
import Navbar from '../../components/Navbar/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <h1>WoW Character Searcher</h1>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default App;
