import React from 'react';
import styles from './HeroicProgress.scss';

class HeroicProgress extends React.Component {

    render() {
      const { progress } = this.props;
      let heroic = 0;

      _.forEach(progress, (key) => {
        if (key.heroicKills > 0) {
          heroic++;
        }
      });

      return (
        <span className={styles.prog}>{heroic}/9 H</span>
      );
    }
}

export default HeroicProgress;
