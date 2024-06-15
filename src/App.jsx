 
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contacto from './components/contact/Contact';

function App() {
  return (
    <><BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<ItemListContainer welcome='Bienvenidos a Vivero Green House' />} />
        <Route exact path="/category/:idCat" element={<ItemListContainer />} />
        <Route exact path="/:prodId" element={<ItemDetailContainer/>} />
        <Route exact path="/contact" element={<Contacto texto='Contacto'/>} />
      </Routes>
    </BrowserRouter>

    </>

  );
}

export default App
