import React from 'react';

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
    const newAvatar = profile.thumbnail.replace("avatar", "profilemain");
    console.log(profile);

    return (
      <div className="character">
        <h1>{profile.name}</h1>
        <img src={`${link}/${newAvatar}`} alt=""
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
        />
        {this.state.imageStatus}
      </div>
    )
  };
}

export default CharacterInfo;
