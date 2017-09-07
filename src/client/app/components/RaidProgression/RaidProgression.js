import * as _ from 'lodash';
import React from 'react';
import cx from 'classnames';
import styles from './RaidProgression.scss';
import BossCard from './BossCard/BossCard';
import Progress from './Progress/Progress';

class RaidProgression extends React.Component {
  constructor(props) {
    super(props);
  };

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
               {bossKills.map((kills) =>
                 <BossCard
                   key={kills.id}
                   kills={kills}
                 />
               )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default RaidProgression;
