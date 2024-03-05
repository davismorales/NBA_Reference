import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <div>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <div className="cards__item__img-wrap">
            <figure
              className="cards__item__pic-wrap"
              data-category={props.label}
            >
              <img src={props.src} alt="Travel" className="cards__item__img" />
            </figure>
            <figure
              className="cards__item__pic-wrap"
              data-category={props.additionalLabel}
            >
              <img
                src={props.additionalSrc} // Assuming additionalSrc is the prop for the additional image source
                alt="Travel"
                className="cards__item__img"
              />
            </figure>
          </div>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItem;