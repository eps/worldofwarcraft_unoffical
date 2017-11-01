import * as _ from 'lodash';
import React from 'react';
import axios from 'axios';
import moment from 'moment';
import config from '../../../../../config/config.js';
import styles from './MythicCard.scss';
import PropTypes from 'prop-types';

const wowKey = config.WOW_API_KEY;

class MythicCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bossImageUrl: ''
    };
  }

  componentWillMount() {
   this.getCreatureDisplayImage();
  }

  getCreatureDisplayImage() {
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
          <span className={styles.name}>{kills.name}</span>
        </td>
        <td className={styles.tableCenter}>
          {timeStamp}
        </td>
        <td className={styles.tableCenter}>
          {kills.mythicKills}
        </td>
      </tr>
    );
  }
}

MythicCard.propTypes = {
  kills: PropTypes.object.isRequired
}


export default MythicCard;
