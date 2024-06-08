import { Link } from 'react-router-dom';
import './ListaComponente.css'
export default function ListaComponente ({seccion, ruta}){
    return (
        <>
        <li><Link to={ruta}>{seccion}</Link></li>
        </>
    );

}