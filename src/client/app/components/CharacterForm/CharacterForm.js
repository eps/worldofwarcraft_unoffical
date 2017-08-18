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
      submitted: false
    };
    this.getRealmList();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRealmChange = this.handleRealmChange.bind(this);
  }

  handleChange(e) {
    console.log('clicking');
    this.setState({[e.target.name]: e.target.value})
    console.log(e.target.name, e.target.value);
  }

  getRealmList() {
    axios.get('https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=' + wowKey)
      .then((res) => {
        const realmNames = _.map(res.data.realms, 'name');
          this.setState({
            realmList: realmNames
          });
          console.log('working', realmNames);
        }).catch((err) => {
          console.log(err);
        });
   }

  handleSubmit(event) {
    event.preventDefault();
    console.log('realm is', this.state.realm);
    axios.get('https://us.api.battle.net/wow/character/' + this.state.realm+ '/' + this.state.characterName + '?locale=en_US&apikey=' + wowKey)
    .then((response) => {
      this.setState({
        profile: response.data,
        submitted: true
      });
    }).catch((error) => {
      console.log("error",error)
    });
  }

  handleRealmChange(e) {
    console.log('currently selected', e.target.value);
    this.setState({realm: e.target.value});
  }

  render() {
    return (
      <div className="bg-white">
        <div className={styles.centralized}>
            <div className={styles.searchContainer}>
              <form onSubmit={this.handleSubmit}>
                <input className={styles.searchInput} type="text" placeholder="Search character" name="characterName" value={this.state.characterName} onChange={this.handleChange} />
                <FASearch className={styles.searchIcon}/>
                <button type="submit" value="Submit">Search</button>
                <Button default fluid danger>testing</Button>
                <select id="realm" onChange={this.handleRealmChange} value={this.state.realm}>
                  <option value="proudmoore">Proudmoore</option>
                  <option value="emerald dream">Emerald Dream</option>
                  <option value="frostmourne">Frostmourne</option>
                </select>
              </form>
            </div>
          { this.state.realmList }
          { this.state.submitted && <CharacterInfo profile={ this.state.profile }/> }
        </div>
      </div>
    );
  }
}

export default CharacterForm;
