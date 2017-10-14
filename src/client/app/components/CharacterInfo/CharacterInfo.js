import React from 'react';
import cx from 'classnames';
import styles from './CharacterInfo.scss';
import CharacterClass from './CharacterClass/CharacterClass';
import CharacterRace from './CharacterRace/CharacterRace';
import RaidProgression from '../RaidProgression/RaidProgression';

class CharacterInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHorde: false
    };
  }

  componentWillReceiveProps(nextProps) {
    // update thumbnail box-shadow based on character faction
    if (nextProps.faction == 1) {
      this.setState({ isHorde: true });
    } else {
      this.setState({ isHorde: false });
    }
  }

  componentDidMount() {
    // alliance if faction = 0
    // horde if faction = 1
    if (this.props.faction == 1) {
      this.setState({ isHorde: true });
    }
  }

  render() {
    const { profile, guild, progress } = this.props;
    const link = "http://render-us.worldofwarcraft.com/character/";
    const newAvatar = profile.thumbnail;
    const armory = "https://us.battle.net/wow/character/"+profile.realm+"/"+profile.name+"/simple";
    const warcraftLogs = "https://www.warcraftlogs.com/character/us/"+profile.realm+"/"+profile.name;
    const isAlliance = profile.faction;
    console.log(profile);

    let faction = null;
    if (isAlliance > 0) {
      faction =
        <div className={cx(styles, {
            [styles.horde]: true,
            [styles.proName]: true,
          })}>{profile.name}
        </div>;
    } else {
      faction =
        <div className={cx(styles, {
            [styles.alliance]: true,
            [styles.proName]: true,
          })}>{profile.name}
        </div>;
    }

    let guildName = null;
    if (guild === '') {
      guildName = <div style={{visibility: 'hidden'}}></div>
    } else {
      guildName = <span>&lt;{guild.name}&gt;</span>
    }

    return (
      <div className={styles.centralized}>
        <div className={styles.characterContainer}>
          <div className={styles.avatarContainer}>
            { this.state.isHorde ?
              <img className={cx(styles, {
                [styles.thumbnail]: true,
                [styles.horde]: true,
              })}
                src={`${link}/${newAvatar}`} alt=""
              />
              :
              <img className={cx(styles, {
                [styles.thumbnail]: true,
                [styles.alliance]: true,
              })}
                src={`${link}/${newAvatar}`} alt=""
              />
            }
          </div>
          <div className={styles.characterInfo}>
            {faction}
            <div className={styles.charText}>
              {guildName}
            </div>
            <div className={styles.charText}>
              {profile.realm}
            </div>
            <div className={styles.charText}>
              <CharacterRace race={profile.race} />
              <CharacterClass classes={profile.class} />
            </div>
          </div>
          <div className={styles.profileLinks}>
            <a href={armory} title="Armory Profile">
              <img src="../assets/img/wow-icon.png" alt="" />
            </a>
            <a className={styles.warcraftLogs} href={warcraftLogs} title="Warcraft Logs">
              <img src="../assets/img/warcraft-logs-icon.png" alt="" />
            </a>
          </div>
        </div>
        <RaidProgression progress={this.props.progress} />
      </div>
    )
  };
}

export default CharacterInfo;
