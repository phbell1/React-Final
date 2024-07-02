import { useState, useContext, useEffect } from "react";
import { sendOrder } from "../firebase/firebase";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";


const useForm = (initData, validate) => {
    const [form, setForm] = useState(initData);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [orderId, setOrderId] = useState(null);
    const { cartProds, totalAmount, vaciarCart } = useContext(CartContext);


    const handleChange = (evt) => {
        const { name, value } = evt.target
        setForm({
            ...form, [name]: value
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const error = validate(form);
        setErrors(error);

        if (Object.keys(error).length === 0) {
            setLoading(true);

            const { validEmail, ...formOrder } = form
            const cartOrder = cartProds.map(({ id, price, quant, title }) => ({ id, price, cantidad: quant, title }));

            const newOrder = {
                buyer: { ...formOrder },
                items: [...cartOrder],
                total: totalAmount(),
            }
            sendOrder(newOrder).then(id => setOrderId(id));
            setFormSubmitted(true);
        }

    }



    const showAlert = (idOrden) => {
        Swal.fire({
            icon: "success",
            title: "Tu Orden Fue Creada Exitosamente",
            html: `numero de orden:<b>${idOrden}<b>`,
            confirmButtonColor: "rgb(166, 226, 166)"
        }).then(response => {
            if (response.isConfirmed) {
                setForm(initData);
                setLoading(false);
                vaciarCart();
                window.location.href = '/home';
            }
        })
    }

    return { form, errors, loading, orderId, formSubmitted, handleChange, handleSubmit, showAlert }

}


export default useForm;





