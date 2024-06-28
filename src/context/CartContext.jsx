
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartProds, setCartProds] = useState([]);



    const addItem = (newItem) => {
        const status = isInCart(newItem.id)
        if (status) {
            const itemsMod = cartProds.map((itemCart) => {
                if (itemCart.id === newItem.id) {
                    return { ...itemCart, quant: itemCart.quant + newItem.quant }
                } else {
                    return itemCart;
                }
            })

            setCartProds(itemsMod);
        } else {
            setCartProds([...cartProds, newItem]);
        }
    }


    const isInCart = (idProd) => {
        const status = cartProds.some((prodCart) => prodCart.id === idProd)
        return status;
    }

    const quantTotal = () => {
        const totalProds = cartProds.reduce((tot, product) => tot + product.quant, 0)
        return totalProds;
    }

    const totalAmount = () => {
        const precioFinal = cartProds.reduce((tot, prodCompra) => tot + (prodCompra.quant * prodCompra.price), 0)
        return precioFinal;
    }

    const borrarProds = (idProd) => {
        const quitarProds = cartProds.filter((products) => products.id !== idProd)
        setCartProds(quitarProds);
    }

    const vaciarCart = () => {
        setCartProds([]);
    }


    return (

        <CartContext.Provider value={{cartProds, addItem, quantTotal, totalAmount, vaciarCart, borrarProds}}>
            {children}
        </CartContext.Provider>
    )
}    