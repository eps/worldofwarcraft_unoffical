import * as _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import TalentItems from './TalentItems/TalentItems.js';

class TalentSection extends React.Component {
  render() {
    const { log } = this.props;
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

TalentSection.propTypes = {
  log: PropTypes.object.isRequired
}

export default TalentSection;
