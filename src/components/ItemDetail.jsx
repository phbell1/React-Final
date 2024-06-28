import './ItemDetailContainer.css';
import { useState, useEffect, useContext} from "react"
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

export default function ItemDetail({product}) {

    const { addItem } = useContext(CartContext);

    const addProd = (cont) => {
        const prCart = {...product, quant: cont}
        addItem(prCart);
    }

    return (
        <>
                <h4>{product.title}</h4>
                <img className="img-prod" src={product.image} alt={product.title} />
                <p className="price">${product.price}</p>
                <p>Categoria: {product.category}</p>
                <p>Stock: {product.stock}</p>
                <ItemCount stock={product.stock} addProd={addProd}/>
                <p>Descripcion: {product.description}</p>
        </>
    )
}