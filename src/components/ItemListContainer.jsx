import './ItemListContainer.css';
import {getProducts} from '../asyncMocks';
import { useEffect, useState } from 'react';
import CardProd from './CardProd';

export default function ItemListContainer ({welcome}){

    const [products, setProducts]=useState([]);

    useEffect(() =>{
         getProducts.then(datos => setProducts(datos));
    },[])

    return (
        <>
        <h1>{welcome}</h1>
        <article>
            {products.map(product => (<CardProd title={product.title} image={product.image} price={product.price} />))}
        </article>
        </>

    );

}