import PropTypes from 'prop-types';
import React from 'react';
import styles from './TotalKills.scss';

const TotalKills = ({log}) => {
  return (
    <td className={styles.tableCenter}>
      <span className={styles.textCenter}>x {log.kill}</span>
    </td>
  )
}

TotalKills.propTypes = {
  log: PropTypes.object.isRequired
}

export default TotalKills;
