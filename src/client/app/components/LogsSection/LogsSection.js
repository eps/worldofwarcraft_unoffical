import * as _ from 'lodash';
import React from 'react';
import cx from 'classnames';
import Logs from './Logs/Logs';
import styles from './LogsSection.scss';
import FaCaretRight from 'react-icons/lib/fa/caret-right';
import FaCaretDown from 'react-icons/lib/fa/caret-down';

class LogsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: false,
      active: false
    }
    this.normalDropDown = this.normalDropDown.bind(this);
    this.selected = this.selected.bind(this);
  }

  selected() {
    this.setState({active: !this.state.active});
    console.log('selected');
  }

  normalDropDown() {
    this.setState({ showMe : true });
  }


  render() {
    const { logs } = this.props;
    console.log(logs);

    return (
      <div className={styles.centralized}>
        <table className={styles.tableDetails}>
          <thead>
            <tr>
              <th className={styles.tableHead}>Warcraft Logs</th>
              <th className={cx(styles.tableHead, styles.tableCenter)}>Best Hestorical Percentage</th>
              <th className={cx(styles.tableHead, styles.tableCenter)}>Spec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={this.state.active ? `${styles.selected}` : `${styles.difficultyTab}` }  onClick={this.selected}>
                <span onClick={this.normalDropDown}>
                  Mythic
                  { this.state.showMe ? <FaCaretDown /> : <FaCaretRight /> }
                </span>
              </td>
              <td className={styles.difficultyTab}>
                <span onClick={this.normalDropDown}>
                  Heroic
                  { this.state.showMe ? <FaCaretDown /> : <FaCaretRight /> }
                </span>
              </td>
              <td className={styles.difficultyTab}>
                <span onClick={this.normalDropDown}>
                  Normal
                  { this.state.showMe ? <FaCaretDown /> : <FaCaretRight /> }
                </span>
              </td>
            </tr>
          </tbody>

          <tbody>
          {_.map(logs, (kills) =>
            <Logs
              key={kills.id}
              logs={kills}
              specs={kills.specs}
            />
          )}
          </tbody>
        </table>
      </div>
    )
  };
}

export default LogsSection;
