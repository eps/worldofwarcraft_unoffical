import * as _ from 'lodash';
import cx from 'classnames';
import React from 'react';
import BossCard from './BossCard/BossCard';
import PropTypes from 'prop-types';
import styles from './LogsSection.scss';

class LogsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMythic: false,
      showHeroic: false,
      showNormal: false,
      bossImageUrl: ''
    }
    this.mythic = this.mythic.bind(this);
    this.heroic = this.heroic.bind(this);
    this.normal = this.normal.bind(this);
    this.checkDifficulty = this.checkDifficulty.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
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
    this.toggleActive();
    this.checkDifficulty();
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps', newProps);
  }

  toggleActive() {
    console.log('toggle running');
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

  checkDifficulty() {
    const mythicParse = [];
    const heroicParse = [];
    const normalParse = [];
    console.log(this.props.logs);
    _.map(this.props.logs, (log) => {
        if (log.difficulty == 5) {
          mythicParse.push(log)
          this.setState({mythicLogs: mythicParse})
        }
        else if (log.difficulty == 4) {
          heroicParse.push(log)
          this.setState({heroicLogs: heroicParse})
        } else {
          normalParse.push(log)
          this.setState({normalLogs: normalParse})
        }
    })
  }

  render() {
    const { progress } = this.props;
    const bossProgress = _.last(progress.raids).bosses;
    const result = _.map(this.props.logs, 'difficulty');
    const mythicActive = _.includes(result, 5);
    const heroicActive = _.includes(result, 4);
    const normalActive = _.includes(result, 3);

    return (
      <div className={styles.centralized}>
        <table className={styles.tableDetails}>
          <thead>
            <tr>
              <th className={styles.tableHead}>Warcraft Logs</th>
              <td className={styles.tableHead}>&nbsp;</td>
              <th className={cx(styles.tableHead, styles.tableCenter)}>Best Hist %.</th>
              <th className={cx(styles.tableHead, styles.tableCenter)}>Best Talents</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.rankingsTab}>
              <td className={`
                ${mythicActive ? `${styles.active}` : `${styles.unkilled}` } ${this.state.showMythic ? `${styles.toggled}` : `${styles.disabled}` }`}
                onClick={this.mythic}
              >
                <span>
                  Mythic
                </span>
              </td>
              <td className={`
                ${heroicActive ? `${styles.active}` : `${styles.unkilled}` } ${this.state.showHeroic ? `${styles.toggled}` : `${styles.disabled}` }`}
                onClick={this.heroic}
              >
                <span>
                  Heroic
                </span>
              </td>
              <td className={`
                ${normalActive ? `${styles.active}` : `${styles.unkilled}` } ${this.state.showNormal ? `${styles.toggled}` : `${styles.disabled}` }`}
                onClick={this.normal}
              >
                <span>
                  Normal
                </span>
              </td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
          <tbody>
          { this.state.showMythic &&
            _.map(bossProgress, (boss, index) => (
                <BossCard
                  boss={boss}
                  key={index}
                  logs={this.state.mythicLogs}
                />
              ))
          }
          { this.state.showHeroic &&
            _.map(bossProgress, (boss, index) => (
                <BossCard
                  boss={boss}
                  key={index}
                  logs={this.state.heroicLogs}
                />
              ))
          }
          { this.state.showNormal &&
            _.map(bossProgress, (boss, index) => (
                <BossCard
                  boss={boss}
                  key={index}
                  logs={this.state.normalLogs}
                />
              ))
          }
          </tbody>
        </table>
      </div>
    )
  }
}

LogsSection.propTypes = {
  logs: PropTypes.array.isRequired,
  progress: PropTypes.object.isRequired
}

export default LogsSection;
