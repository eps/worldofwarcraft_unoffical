import React from 'react';
import styles from './BossKills.scss';

class BossKills extends React.Component {

  render() {
    return (
      <span className={styles.bossKills}>{this.props.total}</span>
    )
  }
}

export default BossKills
