import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx'
import { CartContext } from './srore/shopping-card-context.jsx';
import CartContextProvider from './srore/shopping-card-context.jsx';
function App() {
  
  return (
    <CartContextProvider>
      <Header/>
      <Shop> 
        {DUMMY_PRODUCTS.map((product) => (
                  <li key={product.id}>
                    <Product {...product}  />
                  </li>
                ))}
      </Shop>
      </CartContextProvider>
  );
}

export default App;
