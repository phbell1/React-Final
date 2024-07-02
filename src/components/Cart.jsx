import './CartCard.css'
import { useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext"
import CartCard from "./CartCard";

export default function Cart() {

    const { cartProds, totalAmount, vaciarCart, quantTotal } = useContext(CartContext);

    const handleCart = () => {
        vaciarCart();
    }


    return (
        <>
            <h1>Carrito de Compras</h1>
            {quantTotal() === 0 ?
                <p>El carrito está vacío</p>
             : 
                <>
                    <article className='contArt'>
                        {cartProds.map((prodCart, index) => (
                            <CartCard key={index} prodCart={prodCart} />
                        ))}
                    </article>
                    <p className='totalCart'>Total de la Compra $ {totalAmount()}</p>
                    <div className='contButtons'>
                        <button className='buttons' onClick={handleCart}>Vaciar Carrito</button>
                        <button className='buttons'><Link className='chk' to='/checkout'>Checkout</Link></button>
                    </div>
                </>
            }
        </>
    );

}
