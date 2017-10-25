import * as _ from 'lodash';
import React from 'react';
import cx from 'classnames';
import Logs from './Logs/Logs';
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
    console.log('mount');
    this.toggleActive();
  }

  toggleActive() {
    console.log('running');
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

  render() {
    const { logs, progress } = this.props;
    const bossKills = _.last(progress.raids).bosses;
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
            </tr>
          </tbody>
          <tbody>
          {_.map(logs, (log, index) => (
            <Logs
              log={log}
              key={index}
            />
          ))}
          </tbody>
        </table>
      </div>
    )
  };
}

export default LogsSection;
