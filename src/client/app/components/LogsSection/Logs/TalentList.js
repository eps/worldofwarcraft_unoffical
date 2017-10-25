import * as _ from 'lodash';
import axios from 'axios';
import config from '../../../../../config/config.js';
import styles from './TalentList.scss';
import React from 'react';

const wowKey = config.WOW_API_KEY;

class TalentList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      icons: []
    };
  }

  //
  componentDidMount() {
    console.log('talent', this.props.spell);
    axios.get('https://us.api.battle.net/wow/spell/' + this.props.spell + '?locale=en_US&apikey=' + wowKey)
       .then((res) => {
         const icon = 'https://blzmedia-a.akamaihd.net/wow/icons/18/' + res.data.icon + '.jpg'
         this.setState({
           icons: icon
         });
       }).catch((err) => {
         console.log(err);
     });
  }

  // getCreatureDisplayImage() {
  //   axios.get('https://us.api.battle.net/wow/boss/' + this.props.kills.id + '?locale=en_US&apikey=' + wowKey)
  //     .then((res) => {
  //       const creatureDisplayId = _.first(res.data.npcs).creatureDisplayId;
  //       this.setState({
  //         bossImageUrl :'https://render-us.worldofwarcraft.com/npcs/zoom/creature-display-' + creatureDisplayId + '.jpg'
  //       });
  //     }).catch((err) => {
  //       console.log(err);
  //   });
  // }

  render() {
    console.log('first', this.state);
    return (
      <li>
        <img className={styles.bossPic} src={this.state.icons}/>
      </li>
    )
  }
}

export default TalentList;