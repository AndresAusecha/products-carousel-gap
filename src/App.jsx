import './App.scss';
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
      <Suppliers />
    </div>
  );
}

export default App;
