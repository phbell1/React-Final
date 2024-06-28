import './ItemDetailContainer.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function ItemCount({ stock, addProd }) {
    const [cont, setCont] = useState(1);

    useEffect(() => {
     
    }, [cont]);

    const handleIncr = () => {
        if (cont < stock) {
            setCont(cont + 1);
        }
    }

    const handleDecr = () => {
        if (cont > 1)
            setCont(cont - 1);
    }

    const handleAddCart = () => {
        addProd(cont);

    }

    return (
        <>
            <div className="countCont">
                <button onClick={handleDecr} className="countButtons"> - </button>
                <p className="items"> {cont} </p>
                <button onClick={handleIncr} className="countButtons"> + </button>
            </div>
            <button onClick={handleAddCart} className="addToCartButton">
                <Link className="linkButton" to='/cart'>Agregar Al Carrito</Link>
            </button>
        </>
    )
}
