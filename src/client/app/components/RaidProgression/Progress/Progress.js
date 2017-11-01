import React from 'react';
import styles from './Progress.scss';
import PropTypes from 'prop-types';

class Progress extends React.Component {

    render() {
      return (
        <span className={styles.prog}>{this.props.difficulty}/9 N</span>
      );
    }
}

Progress.propTypes = {
  difficulty: PropTypes.number.isRequired
}

export default Progress;
