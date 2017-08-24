import React from 'react';
import styles from './Progress.scss';

class Progress extends React.Component {

    render() {
      const { progress } = this.props;
      const raids = progress.progression.raids;
      const bossKills = _.last(raids).bosses;
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
        <div className={styles.progress}>
          <ul>
            <li>{normal}/9</li>
            <li>{heroic}/9</li>
            <li>{mythic}/9</li>
          </ul>
        </div>
      );
    }
}

export default Progress;
