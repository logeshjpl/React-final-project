import Cart from './Cart';
import Home from './Home';
import { CartProvider } from 'react-use-cart';

function Product() {
  return (
    <CartProvider>
      <Home/>
      {/* <Cart/> */}
    </CartProvider>
  );
}

export default Product;
