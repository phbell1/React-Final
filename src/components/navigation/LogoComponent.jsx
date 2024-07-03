import './LogoComponent.css';
import { Link } from 'react-router-dom';

export default function LogoComponent (){

    return(
        <>
        <Link className='logo'  to='/home'><img className='logo' src="../src/assets/img/logo_vgh.jpg"/></Link>
        </>
    )
}