import React from 'react';
import styles from './Logs.scss';

const Logs = ({ log }) => {
  return (
    <td className={styles.tableCenter}>
      {log.specs[0].best_historical_percent}
    </td>
  )
}

export default Logs;
