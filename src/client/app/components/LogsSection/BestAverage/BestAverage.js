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
  console.log('mapping', mapping);

  var sum = 0;
  var count = 0;
  for (var i = 0; i < mapping.length; i++) {
    var number = mapping[i];
    sum += number;
    count++;
  }
  const avg = sum/count;
  const roundedAvg = Math.round(avg * 10)/10;

  return (
    <tbody>
      <tr className={styles.stats}>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td className={styles.bestPerfAvg}>
          <div>Best Perf Average</div>
          <div className={styles.percent}>{roundedAvg}</div>
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
