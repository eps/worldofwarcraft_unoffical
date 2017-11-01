import React from 'react';
import styles from './BossKills.scss';
import PropTypes from 'prop-types';

class BossKills extends React.Component {

  render() {
    return (
      <span className={styles.bossKills}>{this.props.total}</span>
    )
  }
}

BossKills.propTypes = {
  total: PropTypes.number.isRequired
}

export default BossKills
