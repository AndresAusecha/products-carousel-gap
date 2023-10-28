import { render, screen } from '@testing-library/react';
import App from './App';
import { CartProvider } from './Cart/CartContext';

export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

test('test the presence of elements', async () => {
    await sleep(50)
  render(
    <CartProvider>
      <App />
    </CartProvider>
  );
  const title = await screen.findByTestId("App-description-container-title");
  const blackButton = await screen.findByText("black");
  const redButton = await screen.findByText("red");
  const blueButton = await screen.findByText("blue");
  const atc = await screen.findByText("Add to cart");
  
  
  expect(blackButton).not.toBeFalsy()
  expect(redButton).not.toBeFalsy()
  expect(blueButton).not.toBeFalsy()
  expect(atc).not.toBeFalsy()
  expect(title.innerHTML).toBe("ABS Caps");
});
