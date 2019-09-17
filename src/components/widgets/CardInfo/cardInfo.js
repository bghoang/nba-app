import React from "react";
import FontAwesome from "react-fontawesome";
import styles from "../CardInfo/cardInfo.css";

const CardInfo = props => {
  const teamName = (teams, team_id) => {
    let data = teams.find(item => {
      return item.id === team_id;
    });
    if (data) {
      return data.name;
    }
  };
  return (
    <div className={styles.cardInfo}>
      <span className={styles.teamName}>
        {teamName(props.teams, props.team_id)}
      </span>
      <span className={styles.date}>
        <FontAwesome name="clock-o" />
        {props.date}
      </span>
    </div>
  );
};

export default CardInfo;
