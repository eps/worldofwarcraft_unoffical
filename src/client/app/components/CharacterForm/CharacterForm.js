import _ from 'lodash'
import React from 'react';
import axios from 'axios';
import './CharacterForm.scss';
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import config from '../../../../config/config.js';
import Button from '../commons/Button/Button';

const wowkey = config.WOW_API_KEY;
// let text = _.isUndefined(route.rightButtonText) ? 'Default value' : route.rightButtonText;

class CharacterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      realm: '',
      characterName: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRealmChange = this.handleRealmChange.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
    console.log(e.target.name, e.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('realm is', this.state.realm);
    axios.get('https://us.api.battle.net/wow/character/'+this.state.realm+ '/' + this.state.characterName + '?locale=en_US&apikey=' + wowkey ).then(response => {
      this.setState({
        profile: response.data,
        submitted: true
      });
    })
    .catch((error) => {
      console.log("error",error)
    })
  }

  handleRealmChange(e) {
    console.log('currently selected', e.target.value);
    this.setState({realm: e.target.value});
  }

  render() {
    const x =
      _.forEach([1, 2], function(value) {
      console.log(value);
      });
      // => Logs `1` then `2`.

      _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
      console.log(key);
    });

    return (
      <div className="bg-white">
        <div className="centralized">
          <div className="form-bg">
            <div className="search-input">
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Character Name" name="characterName" value={this.state.characterName} onChange={this.handleChange} />
                <button type="submit" value="Submit">Search</button>
                <Button default fluid type="submit">Search</Button>
                <select id="realm" onChange={this.handleRealmChange} value={this.state.realm}>
                  <option value="proudmoore">Proudmoore</option>
                  <option value="emerald dream">Emerald Dream</option>
                  <option value="frostmourne">Frostmourne</option>
                </select>
              </form>
            </div>
          </div>
          {this.state.submitted && <CharacterInfo profile={this.state.profile}/>}
        </div>
      </div>
    );
  }
}

export default CharacterForm;
