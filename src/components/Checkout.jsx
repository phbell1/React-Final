import './Checkout.css';
import useForm from '../hooks/useForm';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

export default function Checkout() {


    const initData = {
        name: '',
        phone: '',
        email: '',
        validEmail: '',
    }


    const validate = (form) => {
        let errors = {};

        if (!form.name.trim()) {
            errors.name = 'Este campo es obligatorio y no debe estar vacío';

        }

        if (!form.phone.trim()) {
            errors.phone = 'Este campo es obligatorio y no debe estar vacío';

        }

        if (!form.email.trim()) {
            errors.email = 'Este campo es obligatorio y no debe estar vacío';

        }

        if (!form.validEmail.trim()) {
            errors.validEmail = 'Este campo es obligatorio y no debe estar vacío';

        } else if (form.validEmail !== form.email) {
            errors.validEmail = 'El e-mail debe coincidir con el ingresado';

        }
        return errors

    }
    const { form, errors, loading, orderId, formSubmitted, handleChange, handleSubmit, showAlert } = useForm(initData, validate);
    
    useEffect(() => {
        if (formSubmitted) {
            showAlert(orderId);
        }
    }, [orderId]);


    return (
        <>
            <h1>Complete el formulario para finalizar la compra</h1>
            <div className='cont-form'>
                <form className='formulario' onSubmit={handleSubmit}>
                    <label className='labels' htmlFor="name">Nombre</label>
                    <input className='inputs' onChange={handleChange} type="text" name='name' value={form.name} />
                    {errors.name && <div className='alert'>{errors.name}</div>}

                    <label className='labels' htmlFor="phone">Teléfono</label>
                    <input className='inputs' onChange={handleChange} type="number" name='phone' value={form.phone} />
                    {errors.phone && <div className='alert'>{errors.phone}</div>}

                    <label className='labels' htmlFor="email">E-mail</label>
                    <input className='inputs' onChange={handleChange} type="email" name='email' value={form.email} />
                    {errors.email && <div className='alert'>{errors.email}</div>}

                    <label className='labels' htmlFor="validEmail">Reingresar E-mail</label>
                    <input className='inputs' onChange={handleChange} type="email" name='validEmail' value={form.validEmail} />
                    {errors.validEmail && <div className='alert'>{errors.validEmail}</div>}

                    <button className='bt-comprar' disabled={loading} type="submit">{loading ? "Enviando..." : "Enviar Orden"}</button>
                </form>
                 

            </div>

        </>

    )
}