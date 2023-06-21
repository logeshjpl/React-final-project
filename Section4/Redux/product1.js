import Cart from './Cart';

import { CartProvider } from 'react-use-cart';

function Product1() {
  return (
    <CartProvider>
      <Cart/>
    </CartProvider>
  );
}

export default Product1;
