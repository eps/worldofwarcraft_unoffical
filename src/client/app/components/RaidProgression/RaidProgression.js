import React from 'react';
import styles from './RaidProgression.scss';

class RaidProgression extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { profile }  = this.props;
    const bossKills = profile.progression.raids[38].bosses;

    return (
      <div className={styles.raid}>
        <div className={styles.content}>
          <div className={styles.detail}>
            <div className={styles.title}>
              {profile.progression.raids[38].name}
            </div>
            <div className={styles.progress}>Progress</div>
            <div className={styles.boss}>Boss Kills</div>
          </div>
          <div className={styles.difficulty}>
            <ul>
              <li>Normal</li>
              <li>Heroic</li>
              <li>Mythic</li>
            </ul>
          </div>
          <div className={styles.bossKills}>
            <ul>
              <li>Normal kills</li>
              <li>Heroic</li>
              <li>Mythic</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default RaidProgression;
