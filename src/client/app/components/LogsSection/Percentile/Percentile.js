import PropTypes from 'prop-types';
import React from 'react';
import styles from './Percentile.scss';

const Percentile = ({percent}) => {
  let percentColor = null;
  if (percent.specs[0].best_historical_percent >= 95) {
    percentColor = <span style={{color: 'rgb(255, 128, 0)'}}>{percent.specs[0].best_historical_percent}</span>;
  } else if (percent.specs[0].best_historical_percent >= 75 && percent.specs[0].best_historical_percent <= 94) {
    percentColor = <span style={{color: 'rgb(163, 53, 238)'}}>{percent.specs[0].best_historical_percent}</span>;
  } else if (percent.specs[0].best_historical_percent >= 50 && percent.specs[0].best_historical_percent <= 74) {
    percentColor = <span style={{color: 'rgb(0, 112, 255)'}}>{percent.specs[0].best_historical_percent}</span>;
  } else if (percent.specs[0].best_historical_percent >= 25 && percent.specs[0].best_historical_percent <= 49) {
    percentColor = <span style={{color: 'rgb(30, 255, 0)'}}>{percent.specs[0].best_historical_percent}</span>;
  } else if (percent.specs[0].best_historical_percent <= 24) {
    percentColor = <span style={{color: '#666'}}>{percent.specs[0].best_historical_percent}</span>;
  } else {
    percentColor = <span style={{color: 'rgb(229, 204, 128)'}}>{percent.specs[0].best_historical_percent}</span>;
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
