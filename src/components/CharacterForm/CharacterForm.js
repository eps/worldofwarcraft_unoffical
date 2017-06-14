import React from 'react';
import axios from 'axios';
import './CharacterForm.css';
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import config from '../../config/config.js';

const wowkey = config.WOW_API_KEY;

class CharacterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterName: '',
      profile: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ characterName: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get('https://us.api.battle.net/wow/character/Proudmoore/' + this.state.characterName + '?locale=en_US&apikey=' + wowkey ).then(response => {
      this.setState({ profile: response.data });
      console.log('testing profile', this.state.profile);
    })
    .catch((error) => {
      console.log("error",error)
    })
  }

  render() {

    return (
      <div className="bg-white">
        <div className="centralized">
          <div className="form-bg">
            <form onSubmit={this.handleSubmit}>
              <label> Name: <input type="text" placeholder="Character Name" name="characterName" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <CharacterInfo profile={this.state.profile} />
        </div>
      </div>
    );
  }
}

export default CharacterForm;
