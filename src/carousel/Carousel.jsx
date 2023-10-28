import React, { useState } from "react"
import "./Carousel.scss";
import cx from "classnames";
import { Button } from "../button/Button";

export const Carousel = (props) => {
  const {
    productsList
  } = props;
  const [activeProduct, setActiveProduct] = useState(0);
  
  return (
    <div className="carousel">
      {productsList.map(({ image, color }, index) => (
        <div key={`image-container-${color}`} className={cx("carousel-item", index === activeProduct ? "active" : "inactive")} >
          <img src={image} alt="" />
        </div>
      ))}
      <div className="carousel-activity-indicator-collection">
        {productsList.map((_, index) => (
          <div key={`product-list-el-${index}`} className={cx("carousel-activity-indicator-collection-item", activeProduct === index && "active")} />
        ))}
      </div>
      <hr className="carousel-line" />
      <div className="carousel-buttons">
        {productsList.map(({ color }, index) => (
          <Button key={`button-${color}`} active={activeProduct === index} onClick={() => setActiveProduct(index)} textContent={color} />
        ))}
      </div>
    </div>
  )
}