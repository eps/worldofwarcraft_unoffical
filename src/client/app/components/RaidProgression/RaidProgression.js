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
          <div className= {styles.difficulty}>
            <ul>
              {bossKills.map((kills) => <BossCard kills={kills}/>)}
            </ul>
          </div>
          <div className= {styles.bossKills}>
          </div>
        </div>
      </div>
    );
  }
}

export default RaidProgression;
