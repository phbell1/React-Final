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
                    <ul>
                        <ListaComponente seccion="Inicio" ruta="/" />
                        <ListaComponente seccion="Plantas Interior" ruta="/interior" />
                        <ListaComponente seccion="Plantas Exterior" ruta="/exterior" />
                        <ListaComponente seccion="Maceteria" ruta="/maceteria" />
                        <ListaComponente seccion="Contacto" ruta="/contact" />
                        <CartWidget />
                    </ul>
                </nav>
            </div>

        </>
    );
}


