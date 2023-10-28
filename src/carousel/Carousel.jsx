import React, { useContext, useState } from "react"
import "./Carousel.scss";
import cx from "classnames";
import { Button } from "../button/Button";
import { CartContext } from "../Cart/CartContext";

export const Carousel = () => {
  const { variantsList, setSelectedVariant } = useContext(CartContext)
  const [activeVariant, setActiveVariant] = useState(0);
  
  return (
    <div className="carousel">
      {variantsList.map(({ image, color }, index) => (
        <div key={`image-container-${color}`} className={cx("carousel-item", index === activeVariant ? "active" : "inactive")} >
          <img src={image} alt="" className="carousel-item-image" />
        </div>
      ))}
      <div className="carousel-activity-indicator-collection">
        {variantsList.map((_, index) => (
          <div key={`product-list-el-${index}`} className={cx("carousel-activity-indicator-collection-item", activeVariant === index && "active")} />
        ))}
      </div>
      <hr className="carousel-line" />
      <div className="carousel-buttons">
        {variantsList.map((variant, index) => (
          <Button key={`button-${variant.color}`} active={activeVariant === index} onClick={() => {
            setSelectedVariant(variant)
            setActiveVariant(index)
          }} textContent={variant.color} />
        ))}
      </div>
    </div>
  )
}