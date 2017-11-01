import React from 'react';
import styles from './TotalKills.scss';

const TotalKills = ({ log }) => {
  return (
    <td className={styles.tableCenter}>
      <span className={styles.textCenter}>x {log.kill}</span>
    </td>
  )
}

export default TotalKills;
