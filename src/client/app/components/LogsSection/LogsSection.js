import * as _ from 'lodash';
import axios from 'axios';
import config from '../../../../config/config.js';
import cx from 'classnames';
import React from 'react';
import BossCard from './BossCard/BossCard';
import Logs from './Logs/Logs';
import styles from './LogsSection.scss';

const wowKey = config.WOW_API_KEY;

class LogsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMythic: false,
      showHeroic: false,
      showNormal: false,
      showLogs: false,
      bossImageUrl: ''
    }
    this.mythic = this.mythic.bind(this);
    this.heroic = this.heroic.bind(this);
    this.normal = this.normal.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  mythic() {
    this.setState({
      showMythic: !this.state.showMythic,
      showHeroic: false,
      showNormal: false,
    });
  }
  heroic() {
    this.setState({
      showHeroic: !this.state.showHeroic,
      showMythic: false,
      showNormal: false
    });
  }
  normal() {
    this.setState({
      showNormal: !this.state.showNormal,
      showMythic: false,
      showHeroic: false
    });
  }

  componentDidMount() {
    console.log('mount');
    this.toggleActive();
  }

  toggleActive() {
    const result = _.map(this.props.logs, 'difficulty');
    _.forEach(result, (difficult) => {
      if (difficult == 5) {
        this.mythic();
      } else if (difficult == 4) {
        this.heroic();
      } else {
        this.normal();
      }
    });
  }

  handleChange(e) {
    console.log('running');
    this.setState({
      showLogs: !this.state.showLogs
    })
  }
  //
  // componentWillMount() {
  //   console.log('log section mount');
  //   const bossProgress = _.last(this.props.progress.raids).bosses;
  //   const bossID = _.map(bossProgress, 'id');
  //   for (var i = 0;i<bossID.length;i++) {
  //     axios.get('https://us.api.battle.net/wow/boss/' + bossID[i] + '?locale=en_US&apikey=' + wowKey)
  //       .then((res) => {
  //         const creatureDisplayId = _.first(res.data.npcs).creatureDisplayId;
  //         this.setState({
  //           bossImageUrl :'https://render-us.worldofwarcraft.com/npcs/zoom/creature-display-' + creatureDisplayId + '.jpg'
  //         });
  //       }).catch((err) => {
  //         console.log(err);
  //       });
  //     }
  // }
  // {_.map(logs, (log, index) => (
  //   <Logs
  //     progress={this.props.progress}
  //     log={log}
  //     key={index}
  //   />
  // ))}

  render() {
    const { logs, progress } = this.props;
    const bossProgress = _.last(progress.raids).bosses;
    const name = _.map(logs, 'name');

    return (
      <div className={styles.centralized}>
        <table className={styles.tableDetails}>
          <thead>
            <tr>
              <th className={styles.tableHead}>Warcraft Logs</th>
              <th className={cx(styles.tableHead, styles.tableCenter)}>Percentage</th>
              <th className={cx(styles.tableHead, styles.tableCenter)}>Equipped</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={ this.state.showMythic ? `${styles.toggled}` : `${styles.difficultyTab}`} onClick={this.mythic}>
                <span>
                  Mythic
                </span>
              </td>
              <td className={ this.state.showHeroic ? `${styles.toggled}` : `${styles.difficultyTab}`} onClick={this.heroic}>
                <span>
                  Heroic
                </span>
              </td>
              <td className={ this.state.showNormal ? `${styles.toggled}` : `${styles.difficultyTab}`} onClick={this.normal}>
                <span>
                  Normal
                </span>
              </td>
              <td></td>
            </tr>
          </tbody>
          <tbody>
            {_.map(bossProgress, (boss, index) => (
                <BossCard
                  boss={boss}
                  key={index}
                  logs={logs}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    )
  };
}

export default LogsSection;
