import React from 'react';
import styles from './CharacterRace.scss';

class CharacterRace extends React.Component {
  render(){

    let characterRace;
    let race = this.props.race;
    switch(race) {
      case 1:
        characterRace = "Human";
        break;
      case 2:
        characterRace = "Orc";
        break;
      case 3:
        characterRace = "Dwarf";
        break;
      case 4:
        characterRace = "Night Elf";
        break;
      case 5:
        characterRace = "Undead";
        break;
      case 6:
        characterRace = "Tauren";
        break;
      case 7:
        characterRace = "Gnome";
        break;
      case 8:
        characterRace = "Troll";
        break;
      case 9:
        characterRace = "Goblin";
        break;
      case 10:
        characterRace = "Blood Elf";
        break;
      case 11:
        characterRace = "Draenei";
        break;
      case 25:
        characterRace = "Panda";
        break;
      case 25:
        characterRace = "Panda";
        break;
    }

    let raceColor;
    switch(characterRace) {
      case "Human":
        raceColor = <div style={{color: '#69f'}}>{characterRace}</div>;
        break;
      case "Dwarf":
        raceColor = <div style={{color: '#69f'}}>{characterRace}</div>;
        break;
      case "Night Elf":
        raceColor = <div style={{color: '#69f'}}>{characterRace}</div>;
        break;
      case "Gnome":
        raceColor = <div style={{color: '#69f'}}>{characterRace}</div>;
        break;
      case "Draenei":
        raceColor = <div style={{color: '#69f'}}>{characterRace}</div>;
        break;
      case "Worgen":
        raceColor = <div style={{color: '#69f'}}>{characterRace}</div>;
        break;
      case "Orc":
        raceColor = <div style={{color: '#e02929'}}>{characterRace}</div>;
        break;
      case "Undead":
        raceColor = <div style={{color: '#e02929'}}>{characterRace}</div>;
        break;
      case "Tauren":
        raceColor = <div style={{color: '#e02929'}}>{characterRace}</div>;
        break;
      case "Troll":
        raceColor = <div style={{color: '#e02929'}}>{characterRace}</div>;
        break;
      case "Goblin":
        raceColor = <div style={{color: '#e02929'}}>{characterRace}</div>;
        break;
      case "Blood Elf":
        raceColor = <div style={{color: '#e02929'}}>{characterRace}</div>;
        break;
    }

    return (
      <div className={styles.details}>
        {raceColor}
      </div>
    )
  }
}


export default CharacterRace;
