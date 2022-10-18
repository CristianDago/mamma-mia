import { createContext, useState, useEffect } from "react";

export const AppPizzasContext = createContext({});

export const AppPizzasContextProvider = ({ children }) => {

    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        const fecthPizzas = async () => {
            const resp = await fetch('/pizzas.json') ;
            const data= await resp.json();
            console.log(data)
            setPizzas(data);
        };

        fecthPizzas();
    }, [] );

    // Carrito

    const addToCart = ({ id, price, name, img }) => {
        const productoEncontrado = carrito.findIndex(
        ({ id: productoId }) => productoId === id
        );

        const producto = { id, price, name, img, count:1} ;

        if (productoEncontrado >= 0) {
            carrito[productoEncontrado].count++;
            setCarrito([...carrito]);
        }else {
            setCarrito([...carrito, producto]);
        }
    };

    const increment = (i) => {

        carrito[i].count++;
        setCarrito([...carrito]);

    };

    const decrement = (i) => {
        const {count} = carrito[i]; 
        if (count === 1) {
            carrito.splice(i, 1);
        } else {
            carrito[i].count--;
        }
        setCarrito([...carrito]);
    };
    

    return (

        <AppPizzasContext.Provider value={{ pizzas, setPizzas, carrito, setCarrito, addToCart, increment, decrement }}>
            {children}
        </AppPizzasContext.Provider>

    );
};