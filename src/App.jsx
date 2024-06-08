
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Interior from './components/interior/Interior';
import Exterior from './components/exterior/Exterior';
import Maceteria from './components/maceteria/Maceteria';
import Contact from './components/contact/Contact';

function App() {
  return (
    <><BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer welcome='Bienvenidos a Vivero Green House' />} />
        <Route exact path="/interior" element={<Interior texto='Plantas de Interior'/>} />
        <Route exact path="/exterior" element={<Exterior texto='Plantas de Exterior'/>} />
        <Route exact path="/maceteria" element={<Maceteria texto='Maceteria' />} />
        <Route exact path="/contact" element={<Contact texto='Contacto'/>} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App
