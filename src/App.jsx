
import './App.css'
import Swal from 'sweetalert2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Contacto from './components/contact/Contact';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer welcome='Bienvenidos a Vivero Green House' />} />
            <Route exact path="/category/:idCat" element={<ItemListContainer />} />
            <Route exact path="/products/:prodId" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/contact" element={<Contacto texto='Contacto' />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>

  );
}

export default App
