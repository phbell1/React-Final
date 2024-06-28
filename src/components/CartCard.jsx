import { CartContext } from '../context/CartContext';
import './CartCard.css'
import { useState, useEffect, useContext } from "react"


export default function CartCard({prodCart}) {

    const {borrarProds} = useContext(CartContext);

    const subtotal = (prodCart.quant * prodCart.price);

    const handleBorrar = () => {
        borrarProds(prodCart.id);
    }


    return (
        <>
            <div className='contCart' key={prodCart.id}>
                <img className='imgCart' src={prodCart.image} alt={prodCart.title} />
                <p className='fontCart'>{prodCart.title}</p>
                <p className='fontCart'>Cantidad: {prodCart.quant}</p>
                <p className='fontCart'>Precio Unitario $ {prodCart.price}</p>
                <p className='fontCart'>Subtotal $ {subtotal}</p>
                <button className='borrarButton' onClick={handleBorrar}>BORRAR</button>
            </div>

        </>
    )
}