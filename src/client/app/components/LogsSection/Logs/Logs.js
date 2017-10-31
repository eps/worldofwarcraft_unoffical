import * as _ from 'lodash';
import axios from 'axios';
import config from '../../../../../config/config.js';
import React from 'react';
import styles from './Logs.scss';
import BossCard from '../BossCard/BossCard.js';
import TalentItems from '../TalentItems/TalentItems.js';

const wowKey = config.WOW_API_KEY;

class Logs extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { log, progress } = this.props;
    const bestPercentage = log.specs[0].best_historical_percent;
    const talents = log.specs[0].best_talents;
    const spellID = _.map(talents, 'id');

    return (
      <td className={styles.tableCenter}>
        <span className={styles.textCenter}>{bestPercentage}</span>
      </td>
    )
  }

}

export default Logs;
