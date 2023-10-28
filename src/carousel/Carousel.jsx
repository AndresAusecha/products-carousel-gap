import React from "react"

export const Carousel = (props) => {
  const {
    productsList
  } = props;
  return (
    <div>
      {productsList.map(({ product }) => (
        <div>
          <img src={product.image} alt="" />
        </div>
      ))}
    </div>
  )
}