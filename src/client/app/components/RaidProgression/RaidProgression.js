import React from 'react';
import styles from './RaidProgression.scss';

class RaidProgression extends React.Component {
  constructor(props) {
    super(props);
  }


render() {
  const { profile } = this.props;
  console.log('raid', profile[1]);

  return (
    <div className={styles.raid}>
      <div>{profile[1].progression.raids[38].name}</div>
      <div>Boss Kills {profile[1].progression.raids[38].bosses["0"].normalKills}</div>
    </div>
  )
}

}

export default RaidProgression;
