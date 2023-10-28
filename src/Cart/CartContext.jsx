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
  setCartProducts: () => {},
  isCartVisible: false,
  setIsCartVisible: () => {},
  selectedSupplier: {},
  setSelectedSupplier: () => {},
}

export const CartContext = React.createContext(initialState);

export const CartProvider = ({ children }) => {
  const [selectedVariant, setSelectedVariant] = useState(variantsList[0]);
  const [cartProducts, setCartProducts] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState({});
  
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
      setCartProducts,
      isCartVisible,
      setIsCartVisible,
      selectedSupplier,
      setSelectedSupplier
    }}>
      {children}
    </CartContext.Provider>
  )
}
