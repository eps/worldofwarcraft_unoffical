import * as _ from 'lodash';
import React from 'react';
import cx from 'classnames';
import styles from './RaidProgression.scss';
import BossCard from './BossCard/BossCard';
import Progress from './Progress/Progress';
<<<<<<< HEAD
=======
// import BossKills from './BossKills/BossKills';
>>>>>>> e444319c34c6b31acaf5de415b8a39803c78e45d

class RaidProgression extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMe: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  };


  handleSubmit(){
    this.setState({showMe: true});
    console.log(this.state.showMe);
  }

  // {_.map(bossKills, (kills) =>
  //   <BossCard
  //     key={kills.id}
  //     kills={kills}
  //   />

  render() {
    const { profile } = this.props;
    const bossKills = _.last(profile.progression.raids).bosses;

    return (
      <div className={styles.raid}>
        <div className={styles.content}>
          <div className={styles.detail}>
            <table className={styles.tableDetails}>
              <tbody>
                <tr>
                  <th className={styles.tableHead}>{_.last(profile.progression.raids).name}</th>
                  <th className={cx(styles.tableHead, styles.tableCenter)}>Progress</th>
                  <th className={cx(styles.tableHead, styles.tableCenter)}>Boss Kills</th>
                </tr>
             </tbody>
             <tbody>
                <th><span onClick={this.handleSubmit}>Normal</span></th>
                { this.state.showMe && <BossCard kills={bossKills}/> }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default RaidProgression;
