import { useContext} from "react";
import { AppPizzasContext } from '../context/AppPizzasContext';
import { Card , Button, ListGroup, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../helpers/formatNumbers";


const Tarjeta = () => {

    const {pizzas, addToCart} = useContext(AppPizzasContext);
    const navigate = useNavigate();


    return (

        <div className="galeria grid-columns-3 p-3">
          {pizzas.map((pizza, i) => (

            <Card key={i}>
            <div className="foto" style={{ backgroundImage: `url(${pizza.img})` }}>
            </div>
                <Card.Body>
                    <Card.Header>
                        <Card.Title>{pizza.name}</Card.Title>
                    </Card.Header>
                            
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>🍕 {pizza.ingredients[0]}</ListGroup.Item>
                        <ListGroup.Item>🍕 {pizza.ingredients[1]}</ListGroup.Item>
                        <ListGroup.Item>🍕 {pizza.ingredients[2]}</ListGroup.Item>
                        <ListGroup.Item>🍕 {pizza.ingredients[3]}</ListGroup.Item>
                    </ListGroup>

                    <Card.Footer>
                        <Card.Text className="text-center">${formatNumber(pizza.price)}</Card.Text>
                        <Col><Button variant="info" className="w-100" onClick={() => navigate (`/pizza/${pizza.id}`)} to={`/pizza/${pizza.id}`} >Ver más</Button></Col>
                        <Col><Button variant="danger" className="w-100 mt-3" onClick={()=> addToCart(pizza)}>Añadir</Button>  </Col>
                    </Card.Footer>
                </Card.Body>
            </Card>            

          ))}
         
        </div>
      );

};

export default Tarjeta ; 