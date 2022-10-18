import {Col, Row, Container, Button } from "react-bootstrap";
import { useContext} from "react";
import { AppPizzasContext } from '../context/AppPizzasContext';
import { formatNumber } from "../helpers/formatNumbers";
import "../style.css";


const Carrito = () => {
    const {carrito, increment, decrement} = useContext(AppPizzasContext);
    const total =  carrito.reduce((a, {count, price}) => a + price * count, 0);

    return (
            <>
                <Container className="p-5 fondo-gris mt-5">
                    <Row>
                        <h2 className="pb-3 azul">Detalles del producto</h2>
                    </Row>
            
                    {carrito.map((producto, i) => (

                        <Container key={i}>    
                            <Row className="fondo-blanco mt-2"> 
                                <Col className="d-flex  align-items-center">
                                    <img className="foto_carrito m-3" src={producto.img}/>
                                    <h3 className="text-capitalize">{producto.name}</h3> 
                                </Col> 
                                <Col className="d-flex justify-content-end align-items-center">
                                    <h3>
                                        ${formatNumber(producto.price * producto.count)}
                                    </h3>

                                        <Button className="btn btn-danger m-3" onClick={() => decrement(i)}>-</Button>

                                        <b>{producto.count}</b>

                                        <Button variant="info" className="btn m-3" onClick={() => increment(i)}> + </Button>
                                </Col> 
                            </Row> 
                        </Container> 
                     ))}

                        <Container>         
                                <Row className="pt-3 pb-3">
                                    <h3>Total: ${formatNumber(total)}</h3>
                                    <Button>Ir a pagar</Button>
                                </Row>    
                        </Container>
                    </Container>  
        </> 
)}

export default Carrito; 