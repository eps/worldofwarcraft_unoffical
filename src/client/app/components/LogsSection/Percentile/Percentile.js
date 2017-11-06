import PropTypes from 'prop-types';
import React from 'react';
import styles from './Percentile.scss';

const Percentile = ({percent}) => {
  let percentColor = null;
  if (percent.specs[0].best_historical_percent >= 95 && percent.specs[0].best_historical_percent < 100) {
    percentColor = <span className={styles.legendary}>{percent.specs[0].best_historical_percent}</span>;
  } else if (percent.specs[0].best_historical_percent >= 75 && percent.specs[0].best_historical_percent <= 94) {
    percentColor = <span className={styles.epic}>{percent.specs[0].best_historical_percent}</span>;
  } else if (percent.specs[0].best_historical_percent >= 50 && percent.specs[0].best_historical_percent <= 74) {
    percentColor = <span className={styles.rare}>{percent.specs[0].best_historical_percent}</span>;
  } else if (percent.specs[0].best_historical_percent >= 25 && percent.specs[0].best_historical_percent <= 49) {
    percentColor = <span className={styles.uncommon}>{percent.specs[0].best_historical_percent}</span>;
  } else if (percent.specs[0].best_historical_percent <= 24) {
    percentColor = <span className={styles.common}>{percent.specs[0].best_historical_percent}</span>;
  } else {
    percentColor = <span className={styles.artifact}>{percent.specs[0].best_historical_percent}</span>;
  }
  return (
    <td className={styles.tableCenter}>
      {percentColor}
    </td>
  )
}

Percentile.propTypes = {
  percent: PropTypes.object.isRequired
}

export default Percentile;
