import './ItemDetailContainer.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function ItemCount({ stock, addProd, updateStock, nStock, }) {
    const [disButton, setDisbutton] = useState(nStock);
    const [cont, setCont] = useState(1);
    const [added, setAdded] = useState(false);



    const handleIncr = () => {
        if (cont < nStock) {
            setCont(cont + 1);
        }
    }

    const handleDecr = () => {
        if (cont > 1)
            setCont(cont - 1);
    }

    const handleAddCart = () => {
        addProd(cont);
        setAdded(true);
        updateStock(nStock - cont);
    }

    const handleMore = () => {
        setAdded(false);
        setCont(1);
        setDisbutton(nStock);
        if (nStock === 'SIN STOCK') {
            setCont(0);
        }
    }


    return (
        <>
            {!added ? (
                <div>
                    <div className="countCont">
                        <button onClick={handleDecr} className="countButtons"> - </button>
                        <p className="items"> {cont} </p>
                        <button onClick={handleIncr} className="countButtons"> + </button>
                    </div>
                    {disButton !== 'SIN STOCK' &&
                        <button onClick={handleAddCart} className="addToCartButton">
                            Agregar Al Carrito
                        </button>
                    }
                </div>
            ) : (<div className='contAdded'>
                <p className='prodAdded'>Producto Agregado Al Carrito 🛒</p>
                <div>
                    <button className="addToCartButton">
                        <Link className="linkButton" to='/cart'>Ver Carrito</Link>
                    </button>
                    <button onClick={handleMore} className="addToCartButton">
                        Agregar Más
                    </button>
                    <button className="addToCartButton">
                        <Link className="linkButton" to='/home'>Seguir Comprando</Link>
                    </button>
                </div>
            </div>
            )}




        </>
    )
}
