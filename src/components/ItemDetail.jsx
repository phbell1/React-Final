import './ItemDetailContainer.css';
import { useState, useEffect, useContext} from "react"
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

export default function ItemDetail({product}) {

    const { addItem } = useContext(CartContext);
    const [stk, setStk] = useState(product.stock);

    const addProd = (cont) => {
        const prCart = {...product, quant: cont}
        addItem(prCart);

    }

    const updateStock = (newStock) => {
        if (newStock > 0){
        setStk(newStock)
        }else{
            setStk('SIN STOCK');
        }
    }


    return (
        <>
                <h2>{product.title}</h2>
                <img className="img-prod" src={product.image} alt={product.title} />
                <p className="price">${product.price}</p>
                <p>Categoria: {product.category}</p>
                <p>Stock: {stk}</p>
                <ItemCount stock={product.stock} nStock={stk} addProd={addProd} updateStock={updateStock}/>
                <p>Descripcion: {product.description}</p>
        </>
    )
}