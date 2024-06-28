import './ItemDetailContainer.css';
import { useParams } from "react-router-dom"
import { getProduct } from '../firebase/firebase';
import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';


export default function ItemDetailContainer() {
    const [product, setProduct] = useState({});

    const { prodId } = useParams();

    useEffect(() => {
        const getDetail = async () => {
            const product = await getProduct(prodId);
            if (!product) {
                console.log('ERROR');
            } else {
                setProduct(product);
            }
        }
        getDetail();
    }, [prodId]);


    return (
        <>
            <div className="prod-detail" key={product.id}>
                <ItemDetail product={product}
                />
            </div >


        </>
    )
}