import {Container} from "react-bootstrap";
import Tarjeta from "../components/Card";

const Home = () => {

    return (
        <>
        <Container fluid className="banner  text-center">

            <h1>¡Pizzería Mamma Mia!</h1>
            <h3>¡Tenemos las mejores pizzas que podrás encontrar!</h3>
       
        </Container>

        <Container className="pt-5 pb-5">
            <Tarjeta  />
        </Container>

        </>
    )

}

export default Home; 