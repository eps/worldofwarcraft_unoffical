import PropTypes from 'prop-types';
import React from 'react';
import styles from './Logs.scss';

const Logs = ({log}) => {
  return (
    <td className={styles.tableCenter}>
      {log.specs[0].best_historical_percent}
    </td>
  )
}

Logs.propTypes = {
  log: PropTypes.object.isRequired
}

export default Logs;
