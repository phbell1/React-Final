import './CardProd.css'

export default function CardProd({title, price, image}){
    return(
        <>
        <div className='card'>
            <h4>{title}</h4>
            <img src={image} alt={title}/>
            <p>Precio: ${price}</p>
            <button>Ver Detalles</button>
        </div>

        </>
    )
}