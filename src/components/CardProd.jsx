import './CardProd.css'
import { Link } from 'react-router-dom'

export default function CardProd({title, price, image, idProd, textButton}){
    return(
        <>
        <div className='card'>
            <h4>{title}</h4>
            <img src={image} alt={title}/>
            <p>Precio: ${price}</p>
            <button><Link className="linkButton" to={`/${idProd}`}>{textButton}</Link></button> 
        </div>

        </>
    )
}