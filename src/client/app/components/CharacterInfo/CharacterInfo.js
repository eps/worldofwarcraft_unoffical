import React from 'react';
import styles from './CharacterInfo.scss';
import RaidProgression from '../RaidProgression/RaidProgression';

class CharacterInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      faction: false
    };
  }

  render() {
    const { profile } = this.props;
    const link = "http://render-us.worldofwarcraft.com/character/";
    const newAvatar = profile[0].thumbnail;
    const armory = "https://us.battle.net/wow/character/"+profile[0].realm+"/"+profile[0].name+"/simple";
    console.log('character info', profile);

    const isAlliance = profile[0].faction;
    console.log(isAlliance);
    let faction = null;
    if (isAlliance > 0) {
      faction = <div className={styles.horde}>{profile[0].name}</div>;
    } else {
      faction = <div className={styles.alliance}>{profile[0].name}</div>;
    }





    return (
      <div>
        <div className={styles.characterContainer}>
          <div className={styles.avatarContainer}>
            <img src={`${link}/${newAvatar}`} alt="" />
          </div>
          <div className={styles.characterInfo}>
            {faction}
            <div className={styles.charText}>&lt;{profile[0].guild.name}&gt;</div>
            <div className={styles.charText}>{profile[0].level} - {profile[0].realm}</div>
          </div>
          <div className={styles.profileLinks}>
            <a href={armory} title="Armory Profile">
              <img src="../assets/img/wow-icon.png" alt="" />
            </a>
          </div>
        </div>
        <RaidProgression profile={this.props.profile[1]} />
      </div>
    )
  };
}

export default CharacterInfo;
