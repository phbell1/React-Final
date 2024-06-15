import './NavBar.css';
import ListaComponente from "./ListaComponente";
import CartWidget from './CartWidget';
import LogoComponent from './LogoComponent';

export default function NavBar() {
    return (
        <>
            <div className="contMenu">
                <LogoComponent/>
                <nav className="navMenu">
                    <ul className="ulNav">
                        <ListaComponente seccion="Inicio" ruta="/" />
                        <ListaComponente seccion="Plantas Interior" ruta="/category/Interior"/>
                        <ListaComponente seccion="Plantas Exterior" ruta="/category/Exterior"/>
                        <ListaComponente seccion="Maceteria" ruta="/category/Maceteria"/>
                        <ListaComponente seccion="Contacto" ruta="/contact" />
                        <CartWidget />
                    </ul>
                </nav>
            </div>


        </>
    );
} 


