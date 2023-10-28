import React, { useState } from "react";

const variantsList = [
  {
    image: "/assets/hats/black.png",
    color: "black"
  }, {
    image: "/assets/hats/blue.png",
    color: "blue"
  },
  {
    image: "/assets/hats/red.png",
    color: "red"
  }
]

const initialState = {
  product: {
    
  },
  selectedVariant: {},
  setSelectedVariant: () => {},
  cartProducts: [],
  setCartProducts: () => {}
}

export const CartContext = React.createContext(initialState);

export const CartProvider = ({ children }) => {
  const [selectedVariant, setSelectedVariant] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <CartContext.Provider value={{
      variantsList,
      selectedVariant,
      setSelectedVariant,
      product: {
        name: "ABS Caps",
        description: "The classic design Bump Cap with ventilation ports is for maximum breathability",
        price: 20.00
      },
      cartProducts,
      setCartProducts
    }}>
      {children}
    </CartContext.Provider>
  )
}
