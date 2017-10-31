import React from 'react';
import styles from './Logs.scss';

const Logs = ({ log }) => {
  return (
    <td className={styles.tableCenter}>
      <span className={styles.textCenter}>{log.specs[0].best_historical_percent}</span>
    </td>
  )
}

export default Logs;
