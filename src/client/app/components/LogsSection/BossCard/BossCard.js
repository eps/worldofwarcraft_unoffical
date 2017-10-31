import axios from 'axios';
import config from '../../../../../config/config.js';
import styles from './BossCard.scss';
import Logs from '../Logs/Logs.js';
import React from 'react';

const wowKey = config.WOW_API_KEY;

class BossCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bossImageUrl : '',
      active: false
    }
    this.checkBosses = this.checkBosses.bind(this);
  }

  componentDidMount() {
    axios.get('https://us.api.battle.net/wow/boss/' + this.props.boss.id + '?locale=en_US&apikey=' + wowKey)
      .then((res) => {
        const creatureDisplayId = _.first(res.data.npcs).creatureDisplayId;
        this.setState({
          bossImageUrl :'https://render-us.worldofwarcraft.com/npcs/zoom/creature-display-' + creatureDisplayId + '.jpg'
        });
      }).catch((err) => {
        console.log(err);
    });
    this.checkBosses();
  }

  checkBosses() {
    var newState = {};
    const { boss } = this.props;
    const name = _.map(this.props.logs, 'name');
    _.forEach(name, function(value) {
      if (value == boss.name) {
        this.setState({active: true})
      }
    }.bind(this));
  }

  render() {
    const { logs, boss } = this.props;
    let result = null;
    _.forEach(logs, (value) => {
      if (value.name == this.props.boss.name) {
        console.log(value);
        result = value
      }
      return result;
    });

    return (
      <tr>
        <td>
          <img style={{width: '50px', height: '50px'}} src={this.state.bossImageUrl}/>
          {this.props.boss.name}
        </td>
        { !this.state.active
          ? <td className={styles.tableCenter}>x 0</td>
          : <Logs
              progress={this.props.boss}
              log={result}
            />
        }
      </tr>
    )
  }

}

export default BossCard;
