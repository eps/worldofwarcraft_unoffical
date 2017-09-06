import * as _ from 'lodash';
import React from 'react';
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
            <div className={styles.title}>
              {_.last(profile.progression.raids).name}
            </div>
            <div className={styles.progress}>Progress</div>
            <div className={styles.boss}>Boss Kills</div>
          </div>
          <div className={styles.raidContent}>
            <div className={styles.difficulty}>
              <ul>
                {bossKills.map((kills) =>
                  <BossCard
                    key={kills.id}
                    kills={kills}
                  />
                )}
              </ul>
            </div>
            <div className={styles.difficulty}>
              <ul>
                {bossKills.map((kills) =>
                  <Progress
                    key={kills.id}
                    progress={kills}
                  />
                )}
              </ul>
            </div>
            <div className={styles.bossKills}>
              <ul>
                <li>Normal kills</li>
                <li>Normal kills</li>
                <li>Normal kills</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RaidProgression;
