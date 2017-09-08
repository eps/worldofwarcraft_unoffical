import React from 'react';
import styles from './CharacterInfo.scss';
import RaidProgression from '../RaidProgression/RaidProgression';

class CharacterInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: 'loading' };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }

  render() {
    const { profile } = this.props;
    const link = "http://render-us.worldofwarcraft.com/character/";
    const newAvatar = profile[0].thumbnail;
    console.log('character info', profile);

    return (
      <div>
        <div className={styles.characterContainer}>
          <div className={styles.avatarContainer}>
            <img src={`${link}/${newAvatar}`} alt=""
              onLoad={this.handleImageLoaded.bind(this)}
              onError={this.handleImageErrored.bind(this)}
            />
          </div>
          <div className={styles.characterInfo}>
            <div className={styles.charName}>{profile[0].name}</div>
            <div className={styles.charText}>&lt;{profile[0].guild.name}&gt;</div>
            <div className={styles.charText}>{profile[0].level} - {profile[0].realm}</div>
          </div>
          {this.state.imageStatus}
        </div>
        <RaidProgression profile={this.props.profile[1]} />

      </div>
    )
  };
}

export default CharacterInfo;
