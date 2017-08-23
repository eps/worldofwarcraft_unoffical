import * as _ from 'lodash';
import React from 'react';
import styles from './RaidProgression.scss';
import BossCard from './BossCard/BossCard';

class RaidProgression extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { profile } = this.props;
    const bossKills = _.last(profile.progression.raids).bosses;
    console.log(bossKills);
    let normal = 0;
    let heroic = 0;
    let mythic = 0;
    _.forEach(bossKills, (key) => {
      if (key.normalKills > 0) {
        normal++;
      }
      if (key.heroicKills > 0) {
        heroic++;
      }
      if (key.mythicKills > 0) {
        mythic++;
      }
    });


    return (
      <div className= {styles.raid}>
        <div className= {styles.content}>
          <div className= {styles.detail}>
            <div className= {styles.title}>
              {_.last(profile.progression.raids).name}
            </div>
            <div className= {styles.progress}>Progress</div>
            <div className= {styles.boss}>Boss Kills</div>
          </div>
          <div className={styles.raidContent}>
            <div className= {styles.difficulty}>
              <ul>
                {bossKills.map((kills) => <BossCard kills={kills}/>)}
              </ul>
            </div>
            <div className={styles.progression}>
              <ul>
                <li>{normal}/9</li>
                <li>{heroic}/9</li>
                <li>{mythic}/9</li>
              </ul>
            </div>
            <div className= {styles.bossKills}>
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
