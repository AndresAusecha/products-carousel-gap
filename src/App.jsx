import './App.scss';
import { Button } from './button/Button';
import { Carousel } from './carousel/Carousel';
import { Suppliers } from './suppliers/Suppliers';

const productsList = [
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

function App() {
  return (
    <div className="App">
      <Carousel productsList={productsList} />
      <div className="App-description">
        <div className="App-description-container">
          <p className="App-description-container-title">
            ABS Caps
          </p>
          <p className="App-description-container-content">
            The classic design Bump Cap with ventilation ports is for maximum breathability
          </p>
          <div className="App-description-container-price">
            <p>
              $20.00
            </p>
          </div>
        </div>
      </div>
      <Suppliers />
      <div className="App-button-container">
        <Button textContent="Add to cart" className="add-to-cart" />
      </div>
    </div>
  );
}

export default App;
