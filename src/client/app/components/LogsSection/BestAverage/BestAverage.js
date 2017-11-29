import * as _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './BestAverage.scss'

const BestAverage = ({log}) => {
  const specs = _.map(log, function(value) {
    if (value.specs.length > 1) {
      return value.specs[1];
    } else {
      return value.specs[0]
    }
  });

  const mapping = _.map(specs, function(value) {
    return value.best_historical_percent
  })
  
  var sum = 0;
  var count = 0;
  for (var i = 0; i < mapping.length; i++) {
    var number = mapping[i];
    sum += number;
    count++;
  }
  const avg = sum/count;
  const roundedAvg = Math.round(avg * 10)/10;

  let average = null;
    if (roundedAvg >= 95 && roundedAvg < 100) {
      average = <div className={styles.legendary}>{roundedAvg}</div>;
    }
    else if (roundedAvg >= 75 && roundedAvg <= 94) {
      average = <div className={styles.epic}>{roundedAvg}</div>;
    }
    else if (roundedAvg >= 50 && roundedAvg <= 74) {
      average = <div className={styles.rare}>{roundedAvg}</div>;
    }
    else if (roundedAvg >= 25 && roundedAvg <= 49) {
      average = <div className={styles.uncommon}>{roundedAvg}</div>;
    }
    else if (roundedAvg <= 24) {
      average = <div className={styles.common}>{roundedAvg}</div>;
    }
    else {
      average = <div className={styles.artifact}>{roundedAvg}</div>;
    }

  return (
    <tbody>
      <tr className={styles.stats}>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td className={styles.bestPerfAvg}>
          <div>Best Perf Average</div>
          <div className={styles.percent}>{average}</div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </tbody>
  )
}


BestAverage.propTypes = {
  log: PropTypes.array.isRequired
};

export default BestAverage;
