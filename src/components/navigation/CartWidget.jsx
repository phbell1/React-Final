import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {
    const { quantTotal } = useContext(CartContext);

    return (
        <>
            <h2><Link className='cart'  to='/cart'>🛒{quantTotal()}</Link></h2>
        </>

    );

}