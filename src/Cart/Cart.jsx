import React, { useContext } from "react";
import { Modal } from "../modal/Modal";
import "./Cart.scss"
import { CartContext } from "./CartContext";

export const Cart = () => {
  const { cartProducts, setIsCartVisible, isCartVisible } = useContext(CartContext)
  return (
    <div className="cart" >
      <div className="cart-tools">
        <button className="cart-tools-button" onClick={() => {
          setIsCartVisible((oldIsCartVisible) => !oldIsCartVisible)
        }}>
          <img src="/assets/cart.png" alt="cart-button" srcset="" />
          <div className="counter">
            <p>
              {cartProducts?.length || 0}
            </p>
          </div>
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
            <div className="cart-wrapper-content-list">
              {cartProducts.map((product) => (
                <div className="cart-wrapper-content-list-item">
                  <p>
                    Product: {product.name} - {product.selectedVariant.color}
                  </p>
                  <p>
                    Price: {product.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
