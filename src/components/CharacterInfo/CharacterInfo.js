import React from 'react';

class CharacterInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { profile } = this.props;
    const link = "http://render-us.worldofwarcraft.com/character/";
    const avatar = profile.thumbnail;

    return (
      <div>
        <img src={`${link}/${avatar}`} alt="" />
      </div>
    )
  };
}

export default CharacterInfo;
