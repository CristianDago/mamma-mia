import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppPizzasContext } from '../context/AppPizzasContext';
import { Container,Col, Row, Button, ListGroup} from "react-bootstrap";



import "../style.css";


const Pizza = () => {

    const [pizza, setPizza] = useState({});
    const {pizzas, addToCart} = useContext(AppPizzasContext);
    const { id } = useParams();
    

    useEffect(() => {

        if (id && pizzas.length > 0) {
            const singleProduct = pizzas.filter((pizza) => pizza.id === id);
            setPizza(singleProduct[0]);
        }

        console.log (pizza)

    }, [id, pizzas]);    
    
    return (
        <>
         
            <Container className="pt-5 pb-5 descripcion">
                <Row>
                    <Col sm={5} className="imagen-desc" style={{ backgroundImage: `url(${pizza.img})`}}> </Col>
                    <Col className="p-5 border" border="dark">
                        <Row className="pt-3">
                            <h1>{pizza.name}</h1>
                            <p>{pizza.desc}</p>
                        </Row>    
                        <Row className="pt-3">
                            <h3>Ingredientes: </h3>
                            <ListGroup className="list-group-flush">
                         
                                <ListGroup.Item>🍕 {pizza.ingredients}</ListGroup.Item>
                            
                            </ListGroup>
                            
                        </Row>
                        <Row className="pt-3">
                            <Col><h3 className="azul">Precio: {pizza.price}</h3></Col>
                            <Col><Button variant="danger w-100" onClick={()=> addToCart(pizza)}>🛒 Añadir</Button></Col>
                        </Row>
                    </Col>
                </Row>
            </Container> 
        </> 
    )
};

export default Pizza; 