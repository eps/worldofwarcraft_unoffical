import React from 'react';

class CharacterClass extends React.Component {
  render(){
    let characterClass;
    let classes = this.props.classes;
    switch(classes) {
        case 1:
          characterClass = "Warrior";
          break;
        case 2:
          characterClass = "Paladin";
          break;
        case 3:
          characterClass = "Hunter";
          break;
        case 4:
          characterClass = "Rogue";
          break;
        case 5:
          characterClass = "Priest";
          break;
        case 6:
          characterClass = "Death Knight";
          break;
        case 7:
          characterClass = "Shaman";
          break;
        case 8:
          characterClass = "Mage";
          break;
        case 9:
          characterClass = "Warlock";
          break;
        case 10:
          characterClass = "Monk";
          break;
        case 11:
          characterClass = "Druid";
          break;
        case 12:
          characterClass = "Demon Hunter";
          break;
    }

    let styling;
    switch(characterClass) {
      case "Warrior":
        classColor = <div style={{color: '#C79C6E'}}>{characterClass}</div>;
        break;
      case "Paladin":
        classColor = <div style={{color: '#F58CBA'}}>{characterClass}</div>;
        break;
      case "Hunter":
        classColor = <div style={{color: '#ABD473'}}>{characterClass}</div>;
        break;
      case "Rogue":
        classColor = <div style={{color: '#FFF569'}}>{characterClass}</div>;
        break;
      case "Priest":
        classColor = <div style={{color: '#FFFFFF'}}>{characterClass}</div>;
        break;
      case "Death Knight":
        classColor = <div style={{color: '#C79C6E'}}>{characterClass}</div>;
        break;
      case "Shaman":
        classColor = <div style={{color: '#0070DE'}}>{characterClass}</div>;
        break;
      case "Mage":
        classColor = <div style={{color: '#69CCF0'}}>{characterClass}</div>;
        break;
      case "Warlock":
        classColor = <div style={{color: '#9482C9'}}>{characterClass}</div>;
        break;
      case "Monk":
        classColor = <div style={{color: '#00FF96'}}>{characterClass}</div>;
        break;
      case "Druid":
        classColor = <div style={{color: '#FF7D0A'}}>{characterClass}</div>;
        break;
      case "Demon Hunter":
        classColor = <div style={{color: '#A330C9'}}>{characterClass}</div>;
        break;
    }

    return (
      <div>
        {classColor}
      </div>
    )
  }
}


export default CharacterClass;
