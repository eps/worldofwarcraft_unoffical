import React from 'react';
import styles from './CharacterInfo.scss';
import CharacterClass from './CharacterClass/CharacterClass';
import CharacterRace from './CharacterRace/CharacterRace';
import RaidProgression from '../RaidProgression/RaidProgression';

class CharacterInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { profile, guild, progress } = this.props;
    const link = "http://render-us.worldofwarcraft.com/character/";
    const newAvatar = profile.thumbnail;
    const armory = "https://us.battle.net/wow/character/"+profile.realm+"/"+profile.name+"/simple";
    const isAlliance = profile.faction;
    console.log(profile);

    let faction = null;
    if (isAlliance > 0) {
      faction = <div className={styles.horde}>{profile.name}</div>;
    } else {
      faction = <div className={styles.alliance}>{profile.name}</div>;
    }

    let guildName = null;
    if (guild === '') {
      guildName = <div style={{visibility: 'hidden'}}></div>
    } else {
      guildName = <span>&lt;{guild.name}&gt;</span>
    }

    return (
      <div>
        <div className={styles.characterContainer}>
          <div className={styles.avatarContainer}>
            <img src={`${link}/${newAvatar}`} alt="" />
          </div>
          <div className={styles.characterInfo}>
            {faction}
            <div className={styles.charText}>
              {guildName}
            </div>
            <div className={styles.charText}>{profile.realm}</div>
            <div className={styles.charText}>
              <CharacterRace race={profile.race} /><CharacterClass classes={profile.class} />
            </div>
          </div>
          <div className={styles.profileLinks}>
            <a href={armory} title="Armory Profile">
              <img src="../assets/img/wow-icon.png" alt="" />
            </a>
          </div>
        </div>
        <RaidProgression progress={this.props.progress} />
      </div>
    )
  };
}

export default CharacterInfo;
