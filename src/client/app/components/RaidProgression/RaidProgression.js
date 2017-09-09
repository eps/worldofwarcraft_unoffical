import * as _ from 'lodash';
import React from 'react';
import cx from 'classnames';
import styles from './RaidProgression.scss';
import BossCard from './BossCard/BossCard';
import Progress from './Progress/Progress';
import FaCaretRight from 'react-icons/lib/fa/caret-right';
// import BossKills from './BossKills/BossKills';


class RaidProgression extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  };


  handleSubmit(){
    this.setState({showMe: !this.state.showMe});

  }

  // {_.map(bossKills, (kills) =>
  //   <BossCard
  //     key={kills.id}
  //     kills={kills}
  //   />

  render() {
    const { profile } = this.props;
    const bossKills = _.last(profile.progression.raids).bosses;

    return (
      <div className={styles.raid}>
        <div className={styles.content}>
          <div className={styles.detail}>
            <table className={styles.tableDetails}>
              <tbody>
                <tr>
                  <th className={styles.tableHead}>{_.last(profile.progression.raids).name}</th>
                  <th className={cx(styles.tableHead, styles.tableCenter)}>Progress</th>
                  <th className={cx(styles.tableHead, styles.tableCenter)}>Boss Kills</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <span onClick={this.handleSubmit}>
                      Normal
                      <FaCaretRight />
                    </span>
                  </td>
                </tr>
              </tbody>
              { this.state.showMe &&
                <tbody>
                  {_.map(bossKills, (kills) =>
                    <BossCard
                      key={kills.id}
                      kills={kills}
                    />
                  )}
                </tbody>
              }
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default RaidProgression;
