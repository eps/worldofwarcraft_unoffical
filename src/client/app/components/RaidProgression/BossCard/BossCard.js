import React from 'react';
import axios from 'axios';
import moment from 'moment';
import config from '../../../../../config/config.js';
import styles from './BossCard.scss';

const wowKey = config.WOW_API_KEY;

// <div className={styles.bossCard}>
//   <div className={styles.row}>
//     <h3 className={styles.bossName}>{kills.name}</h3>
//     <div className={styles.row}>
//       <img className={styles.bossPic} src={this.state.bossImageUrl}/>
//       <div className={styles.cardText}>
//         <li>LFR Kills: {kills.lfrKills}</li>
//         <li>Normal Kills: {kills.normalKills}</li>
//         <li>Heroic Kills: {kills.heroicKills}</li>
//         <li>Mythic Kills: {kills.mythicKills}</li>
//       </div>
//     </div>
//   </div>
// </div>

class BossCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bossImageUrl: ''
    };
  }

  componentWillMount() {
   this.getCreatureDisplayImage();
  }

  getCreatureDisplayImage () {
    axios.get('https://us.api.battle.net/wow/boss/' + this.props.kills.id + '?locale=en_US&apikey=' + wowKey)
      .then((res) => {
        const creatureDisplayId = _.first(res.data.npcs).creatureDisplayId;
        this.setState({
          bossImageUrl :'https://render-us.worldofwarcraft.com/npcs/zoom/creature-display-' + creatureDisplayId + '.jpg'
        });
      }).catch((err) => {
        console.log(err);
      });
    }

    render() {
      const { kills } = this.props;
      let timeStamp = moment(kills.normalTimestamp).fromNow();

      return (
        <tr>
          <td>
            <img className={styles.bossPic} src={this.state.bossImageUrl}/>
            {kills.name}
          </td>
          <td className={styles.tableCenter}>
            {timeStamp}
          </td>
          <td className={styles.tableCenter}>
            {kills.normalKills}
          </td>
        </tr>
    );
  }
}

export default BossCard;
