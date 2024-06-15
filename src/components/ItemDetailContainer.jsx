import './ItemDetailContainer.css';
import { useParams } from "react-router-dom"
import { getProduct } from '../firebase/firebase';
import { useEffect, useState } from "react";

export default function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    const { prodId } = useParams();

    useEffect(() => {
        getProduct(prodId).then((product) => setProduct(product));
        /*setProduct(getProduct(prodId))*/
    }, [])


    return (
        <> 
            <div className="prod-detail">
                <p>ID: {prodId}</p>
                <h4>{product.title}</h4>
                <img className="img-prod" src={product.image} alt={product.title} />
                <p>Precio: ${product.price}</p>
                <p>Categoria: {product.category}</p>
                <p>Descripcion: {product.description}</p>
            </div>


        </>
    )
}