import React from 'react';
import styles from './BossCard.scss';

class BossCard extends React.Component {

    render() {
        const { kills } = this.props;

        return (
            <div className={styles.bossCard}>
                <div className={styles.bossName}>Name: {kills.name}</div>
                <div className={styles.bossName}>LFR Kills: {kills.lfrKills}</div>
                <div className={styles.bossName}>Normal Kills: {kills.normalKills}</div>
                <div className={styles.bossName}>Heroic Kills: {kills.heroicKills}</div>
                <div className={styles.bossName}>Mythic Kills: {kills.mythicKills}</div>
            </div>
        );
    }
}

export default BossCard;