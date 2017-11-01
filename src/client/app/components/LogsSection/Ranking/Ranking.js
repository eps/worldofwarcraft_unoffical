import PropTypes from 'prop-types';
import React from 'react';
import styles from './Logs.scss';

const Ranking = ({ranking}) => {
  return (
    <td className={styles.tableCenter}>
      {ranking.specs[0].best_historical_percent}
    </td>
  )
}

Ranking.propTypes = {
  ranking: PropTypes.object.isRequired
}

export default Ranking;
