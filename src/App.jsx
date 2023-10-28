import { useContext } from 'react';
import './App.scss';
import { Button } from './button/Button';
import { Carousel } from './carousel/Carousel';
import { Suppliers } from './suppliers/Suppliers';
import { CartContext } from './Cart/CartContext';

function App() {
  const { product, selectedVariant, setCartProducts } = useContext(CartContext)
  
  return (
    <div className="App">
      <Carousel />
      <div className="App-description">
        <div className="App-description-container">
          <p className="App-description-container-title">
            {product.name}
          </p>
          <p className="App-description-container-content">
            {product.description}
          </p>
          <div className="App-description-container-price">
            <p>
              ${product.price}
            </p>
          </div>
        </div>
      </div>
      <Suppliers />
      <div className="App-button-container">
        <Button textContent="Add to cart" className="add-to-cart" onClick={() => {
          setCartProducts((oldCardProducts) => [...oldCardProducts, {
            ...product,
            selectedVariant
          }])
        }} />
      </div>
    </div>
  );
}

export default App;
