import React from 'react';
import styles from './CharacterInfo.scss';

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
    const newAvatar = profile.thumbnail;
    console.log(profile);

    return (
      <div className={styles.characterContainer}>
      <div className={styles.avatarContainer}>
        <img src={`${link}/${newAvatar}`} alt=""
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
        />
      </div>
        <div className={styles.characterInfo}>
          <h3>{profile.name}</h3>
          <h3>{profile.guild.name}</h3>
          <h3>{profile.level} - {profile.realm}</h3>
        </div>
        {this.state.imageStatus}
      </div>
    )
  };
}

export default CharacterInfo;
