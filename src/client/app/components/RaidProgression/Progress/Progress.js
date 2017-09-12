import React from 'react';
import styles from './Progress.scss';

class Progress extends React.Component {

    render() {
      return (
        <span className={styles.prog}>{this.props.difficulty}/9 N</span>
      );
    }
}

export default Progress;
