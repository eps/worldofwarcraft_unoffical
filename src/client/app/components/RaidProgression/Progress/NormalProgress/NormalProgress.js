import React from 'react';
import styles from './NormalProgress.scss';

class NormalProgress extends React.Component {

    render() {
      const { progress } = this.props;
      let normal = 0;

      _.forEach(progress, (key) => {
        if (key.normalKills > 0) {
          normal++;
        }
      });

      return (
        <span className={styles.prog}>{normal}/9 N</span>
      );
    }
}

export default NormalProgress;
