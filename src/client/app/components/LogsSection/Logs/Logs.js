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

  // <ul>
  // {_.map(spellID, (spell, index) =>
  //   <TalentItems spell={spell} key={index} />
  // )}
  // </ul>
  render() {
    const { log, progress } = this.props;
    const bestPercentage = log.specs[0].best_historical_percent;
    const talents = log.specs[0].best_talents;
    const spellID = _.map(talents, 'id');

    return (
      <tbody>
        <td className={styles.tableCenter}>
          <span className={styles.textCenter}>{bestPercentage}</span>
        </td>
      </tbody>
    )
  }

}

export default Logs;
