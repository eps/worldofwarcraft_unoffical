import React from 'react';
import TalentItems from '../TalentItems/TalentItems.js';

class TalentSection extends React.Component {
  render() {
    const { log } = this.props;
    const bestPercentage = log.specs[0].best_historical_percent;
    const talents = log.specs[0].best_talents;
    const spellID = _.map(talents, 'id');

    return (
      <ul>
        {_.map(spellID, (spell, index) =>
          <TalentItems spell={spell} key={index} />
        )}
      </ul>
    )
  }
}

export default TalentSection;
