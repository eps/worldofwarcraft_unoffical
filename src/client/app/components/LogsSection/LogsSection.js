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

  handleChange() {
    this.setState({
      showLogs: !this.state.showLogs
    })
  }

  render() {
    const { logs, progress } = this.props;
    const bossProgress = _.last(progress.raids).bosses;

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
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
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
  }
}

LogsSection.propTypes = {
  logs: PropTypes.array.isRequired,
  progress: PropTypes.object.isRequired
}

export default LogsSection;
