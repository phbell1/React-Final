import './ItemListContainer.css';
/*import { getProducts, getCats } from '../asyncMocks';*/
import { getProducts, getCats } from '../firebase/firebase';
import { useEffect, useState } from 'react';
import CardProd from './CardProd';
import { useParams } from 'react-router-dom';


export default function ItemListContainer({ welcome }) {

    const [products, setProducts] = useState([]);
    
    const {idCat} = useParams();
    
    useEffect(() => {
        if (idCat){
            getCats(idCat).then((products) => setProducts(products));
        }else{
            getProducts().then((products) => setProducts(products));
        }
    }, [idCat])

    return (
        <>
            <h1>{welcome}</h1>
            <article>
                {products.map(product =>
                (<CardProd
                    title={product.title} 
                    image={product.image}
                    price={product.price}
                    idProd={product.id}
                    textButton="Ver Detalles"
                />
                ))}
            </article>
        </>

    )

}