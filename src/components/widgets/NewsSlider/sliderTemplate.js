import React from "react";
import Slick from "react-slick";
import styles from "./slider.css";
import { Link } from "react-router-dom";

const SliderTemplates = props => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //Overwrite the setting if there is any changes
    ...props.settings
  };

  let template = null;

  switch (props.type) {
    case "featured":
      template = props.data.map((item, i) => {
        return (
          <div key={i}>
            <div className={styles.featured_item}>
              <div
                className={styles.featured_image}
                style={{
                  background: `url(../image/articles/${item.image})`
                }}
              ></div>
              <Link to={`/articles/${item.id}`}>
                <div className={styles.featured_caption}>{item.title}</div>
              </Link>
            </div>
          </div>
        );
      });
      break;
    default:
      template = null;
  }

  return <Slick {...settings}>{template}</Slick>;
};

export default SliderTemplates;
