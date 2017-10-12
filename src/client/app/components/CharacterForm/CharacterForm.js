import _ from 'lodash'
import axios from 'axios';
import React from 'react';
import styles from './CharacterForm.scss';
import CharacterInfo from '../CharacterInfo/CharacterInfo';
import config from '../../../../config/config.js';
import Button from '../commons/Button/Button';
import FASearch from 'react-icons/lib/fa/search';

const wowKey = config.WOW_API_KEY;

class CharacterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterName: '',
      realm: '',
      realmList: [],
    };
    this.getRealmList();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRealmChange = this.handleRealmChange.bind(this);
  }

  handleChange(e) {
    if (e.key === 'Enter') {
      this.handleSubmit()
    }
    this.setState({[e.target.name]: e.target.value});
  }

  getRealmList() {
    axios.get('https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=' + wowKey)
      .then((res) => {
        const realmNames = _.map(res.data.realms, 'name');
          this.setState({
            realmList: realmNames
          });
        }).catch((err) => {
          console.log(err);
        });
   }

  handleSubmit(e) {
    e.preventDefault();
    console.log('realm is', this.state.realm);
    console.log('character ', this.state.characterName);

    const getCharInfo = () => {
       return axios.get('https://us.api.battle.net/wow/character/' + this.state.realm + '/' + this.state.characterName + '?locale=en_US&apikey=' + wowKey);
    }

    const getCharGuild = () => {
       return axios.get('https://us.api.battle.net/wow/character/' + this.state.realm + '/' + this.state.characterName + '?fields=guild&locale=en_US&apikey=' + wowKey);
    }

    const getCharProgress = () => {
      return axios.get('https://us.api.battle.net/wow/character/' + this.state.realm + '/' + this.state.characterName + '?fields=progression&locale=en_US&apikey=' + wowKey);
    }

    axios.all([
      getCharInfo(),
      getCharGuild(),
      getCharProgress()
    ]).then(axios.spread((profile, guild, progress) => {
      this.setState({
        profile: profile.data,
        guild: guild.data.guild || '',
        progress: progress.data.progression,
        submitted: true
      });
    })).catch((err) => {
      console.log(err);
    });
  };

  handleRealmChange(e) {
    console.log('currently selected', e.target.value);
    this.setState({realm: e.target.value});
  };

  render() {
    const realmList = this.state.realmList;
    const selectBox = document.getElementById('realm');

    _.forEach(realmList, (realm) => {
      const realmNames = realm;
      const option= document.createElement('option');
      option.text= realmNames;
      selectBox.add(option);
    });

    return (
      <div className={styles.bgWhite}>
        <div className={styles.centralized}>
            <div className={styles.searchContainer}>
              <form onSubmit={this.handleSubmit}>
                <input
                  className={styles.searchInput}
                  type="text"
                  placeholder="Search character"
                  name="characterName"
                  value={this.state.characterName}
                  onChange={this.handleChange}
                />
                <FASearch
                  onClick={this.handleSubmit}
                  className={styles.searchIcon}
                />
                <div className={styles.optionContainer}>
                  <select id="realm" onChange={this.handleRealmChange} value={this.state.realm}>
                  </select>
                </div>
                <input type="submit" style={{visibility: 'hidden'}}/>
              </form>
            </div>
          { this.state.submitted && <CharacterInfo profile={this.state.profile} guild={this.state.guild} progress={this.state.progress}/> }
        </div>
      </div>
    );
  }
}

export default CharacterForm;
