import { Link } from 'react-router-dom';
import './ListaComponente.css'


export default function ListaComponente ({seccion, ruta}){ 

    return (
        <>
        <li className="liNav"><Link to={ruta}>{seccion}</Link></li>
        </>
    );

}