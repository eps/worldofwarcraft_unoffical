import React from 'react';
import styles from './MythicProgress.scss';

class MythicProgress extends React.Component {

    render() {
      const { progress } = this.props;
      let mythic = 0;

      _.forEach(progress, (key) => {
        if (key.mythicKills > 0) {
          mythic++;
        }
      });

      return (
        <span className={styles.prog}>{mythic}/9 M</span>
      );
    }
}

export default MythicProgress;
