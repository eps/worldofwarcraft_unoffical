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
    this.setState({[e.target.name]: e.target.value});
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

    axios.all([
      axios.get('https://us.api.battle.net/wow/character/' + this.state.realm + '/' + this.state.characterName + '?fields=guild&locale=en_US&apikey=' + wowKey),
      axios.get('https://us.api.battle.net/wow/character/' + this.state.realm + '/' + this.state.characterName + '?fields=progression&locale=en_US&apikey=' + wowKey)
    ]).then(axios.spread((guild,progression) => {
      let profile = _.concat(guild.data, progression.data);
      this.setState({
        profile: profile,
        submitted: true
      })
    })).catch(error => console.log('error', error));
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
      <div className= {styles.bgWhite}>
        <div className= {styles.centralized}>
            <div className= {styles.searchContainer}>
              <form onSubmit= {this.handleSubmit}>
                <input className= {styles.searchInput} 
                       type= "text"
                       placeholder= "Search character" 
                       name= "characterName" 
                       value= {this.state.characterName} 
                       onChange= {this.handleChange}/>
                <FASearch onClick= {this.handleSubmit} className= {styles.searchIcon}/>
                <div className= {styles.optionContainer}>
                  <select id= "realm" 
                          onChange= {this.handleRealmChange} 
                          value= {this.state.realm}>
                  </select>
                </div>
                <Button default primary fluid type= "submit">Search</Button>
              </form>
            </div>
          { this.state.submitted && <CharacterInfo profile= {this.state.profile}/> }
        </div>
      </div>
    );
  }
}

export default CharacterForm;
