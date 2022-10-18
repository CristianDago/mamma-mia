import { Col, Container,Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../style.css";

import { useContext } from "react";
import { AppPizzasContext } from "../context/AppPizzasContext";
import { formatNumber } from "../helpers/formatNumbers";


export default function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    const { carrito } = useContext(AppPizzasContext)
    const total = carrito.reduce(
        (valorAnterior, { count, price }) => (valorAnterior + ( price * count ) ), 0
    );
  
    return (
        <>
            <Container fluid className="bg-azul p-3">
                <Container>
                    <Row>
                        <Col>
                            <NavLink className={ setActiveClass } end to="/">
                                🍕 Pizzaria Mamma Mia!
                            </NavLink>
                        </Col>
                        <Col className="text-right">
                            {" - "}
                            <NavLink className={ setActiveClass } to="/carrito">
                            🛒 Total: ${formatNumber(total)}
                            </NavLink>
                        </Col>
                    </Row>  
                </Container> 
            </Container>        
        </>
     );

    }

    