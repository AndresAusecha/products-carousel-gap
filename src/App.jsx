import { useContext, useState } from 'react';
import './App.scss';
import { Button } from './button/Button';
import { Carousel } from './carousel/Carousel';
import { Suppliers } from './suppliers/Suppliers';
import { CartContext } from './Cart/CartContext';
import { Cart } from './Cart/Cart';
import { Modal } from './modal/Modal';

function App() {
  const { product, selectedSupplier, selectedVariant, setCartProducts } = useContext(CartContext)
  const [isMessagePopupVisible, setIsMessagePopupVisible] = useState(false);

  return (
    <div className="App">
      <Cart />
      <Carousel />
      <Modal isOpen={isMessagePopupVisible} modalId="notification-pop-up">
        <div className="App-notification">
          <div className="App-notification-container">
            <p>
              Product successfully added to the shopping cart
            </p>
            <Button onClick={() => { setIsMessagePopupVisible(false) }} textContent="Accept" />
          </div>
        </div>
      </Modal>
      <div className="App-description">
        <div className="App-description-container">
          <p data-testid="App-description-container-title" className="App-description-container-title">
            {product.title}
          </p>
          <p className="App-description-container-content">
            {product.description}
          </p>
          <div className="App-description-container-price">
            <p>
              ${product.price?.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <Suppliers />
      <div className="App-button-container">
        <Button textContent="Add to cart" className="add-to-cart" onClick={() => {
          setCartProducts((oldCardProducts) => [...oldCardProducts, {
            ...product,
            selectedVariant,
            selectedSupplier
          }])
          setIsMessagePopupVisible(true)
        }} />
      </div>
    </div>
  );
}

export default App;
