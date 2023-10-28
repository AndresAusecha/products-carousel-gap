import React, { useContext } from "react";
import { Modal } from "../modal/Modal";
import "./Cart.scss"
import { CartContext } from "./CartContext";

export const Cart = () => {
  const { cartProducts, setIsCartVisible, isCartVisible } = useContext(CartContext)
  return (
    <div className="cart">
      <div className="cart-button">
        <button onClick={() => {
          setIsCartVisible((oldIsCartVisible) => !oldIsCartVisible)
        }}>
          <img src="/assets/cart.png" alt="cart-button" srcset="" />
        </button>
      </div>
      <Modal isOpen={isCartVisible}>
        <div className="cart-wrapper">
          <div className="cart-wrapper-content">
            <div className="cart-wrapper-content-close-button">
              <button onClick={() => setIsCartVisible((oldIsCartVisible) => !oldIsCartVisible)}>X</button>
            </div>
            <h1>
              Products
            </h1>
            <div>
              {cartProducts.map((product) => (
                <div>
                  {product.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
