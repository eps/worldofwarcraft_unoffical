import * as _ from 'lodash';
import React from 'react';
import styles from './Logs.scss';

class Logs extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { logs, specs } = this.props;
    console.log('log props', logs);
    console.log('specs', specs);

    return (
      <tr>
        <td>
          {logs.name}
        </td>
        <td>
          {specs[0].best_historical_percent}
        </td>
        <td>

        </td>
      </tr>
    )
  }

}

export default Logs;
