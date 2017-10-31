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
    this.state = {
      bossImageUrl: '',
      icon: [],
    }
  }
  //
  // componentWillMount() {
  //   axios.get('https://us.api.battle.net/wow/boss/' + this.props.progress.id + '?locale=en_US&apikey=' + wowKey)
  //     .then((res) => {
  //       const creatureDisplayId = _.first(res.data.npcs).creatureDisplayId;
  //       this.setState({
  //         bossImageUrl :'https://render-us.worldofwarcraft.com/npcs/zoom/creature-display-' + creatureDisplayId + '.jpg'
  //       });
  //     }).catch((err) => {
  //       console.log(err);
  //   });
  // }
  // const following = _.map(_.take(this.props.profile.following, 3), (following) => (
  //     <img key={following.id} className={styles.image} src={`${baseUrl}/30x30/${following.image}`} />
  //   ));
  // const bestPercentage = _.map(percentage, (percent) =>  (
  //   <span key={percent.id}>{percent.best_historical_percent}</span>
  // ));
  render() {
    const { log, progress } = this.props;
    // const result = _.head(log.specs);
    // const bestPercentage = result.best_historical_percent;
    // const talents = result.best_talents;
    // const spellID = _.map(talents, 'id');
    // console.log('logs', this.props.result);


    return (
      <td>
        <td className={styles.tableCenter}>
          number
        </td>
        <td className={styles.tableCenter}>
          <ul>
            number
          </ul>
        </td>
      </td>
    )
  }

}

export default Logs;
