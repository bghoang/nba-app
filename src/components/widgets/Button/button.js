import React from "react";
import { Link } from "react-router-dom";
import styles from "../Button/button.css";

const buttons = props => {
  let template = null;
  switch (props.type) {
    case "loadmore":
      template = (
        <div onClick={props.loadMore} className={styles.blue_btn}>
          {props.cta}
        </div>
      );
      break;
    default:
      template = null;
  }
  return template;
};

export default buttons;
