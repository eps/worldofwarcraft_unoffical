import React from 'react';
import styles from './Progress.scss';
import moment from 'moment';

class Progress extends React.Component {

    render() {
      const { progress } = this.props;
      let timeStamp = moment(progress.normalTimestamp).fromNow();

      let normal = 0;
      let heroic = 0;
      let mythic = 0;
      _.forEach(progress, (key) => {
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
          <div className={styles.progressCard}>
            <div className={styles.normal}>{timeStamp}</div>
          </div>
        </div>
      );
    }
}

export default Progress;
