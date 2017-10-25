import * as _ from 'lodash';
import axios from 'axios';
import config from '../../../../../config/config.js';
import React from 'react';
import styles from './Logs.scss';
import TalentList from './TalentList.js';

const wowKey = config.WOW_API_KEY;

class Logs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bossImageUrl: '',
      icon: [],
    }
  }

  // componentDidMount() {
  //   console.log('log mount');
  //   const result = _.head(this.props.log.specs);
  //   const bestPercentage = result.best_historical_percent;
  //   const talents = result.best_talents;
  //   const spellID = _.map(talents, 'id');
  //   for (var i=0;i<spellID.length;i++) {
  //     axios.get('https://us.api.battle.net/wow/spell/' + spellID[i] + '?locale=en_US&apikey=' + wowKey)
  //        .then((res) => {
  //          console.log('axios');
  //          this.setState({
  //            spellID : res.data,
  //            icon: 'https://blzmedia-a.akamaihd.net/wow/icons/18/' + res.data.icon + '.jpg',
  //          });
  //        }).catch((err) => {
  //          console.log(err);
  //      });
  //   }
  // }

  // componentWillMount() {
  //   axios.get('https://us.api.battle.net/wow/boss/' + this.props.boss.id + '?locale=en_US&apikey=' + wowKey)
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
    const { log } = this.props;
    const result = _.head(log.specs);
    const bestPercentage = result.best_historical_percent;
    const talents = result.best_talents;
    const spellID = _.map(talents, 'id');
    const talentIcons = this.state.icon;
    console.log(spellID);

    return (
      <tr>
        <td className={styles.width}>
          <img className={styles.bossPic} alt=""/>
          <span className={styles.name}>{log.name}</span>
        </td>
        <td className={styles.tableCenter}>
          {bestPercentage}
        </td>
        <td className={styles.tableCenter}>
          <ul>
            {_.map(spellID, (spell, index) =>
              <TalentList spell={spell} key={index} />
            )}
          </ul>
        </td>
      </tr>
    )
  }

}

export default Logs;
