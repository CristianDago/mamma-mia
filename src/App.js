import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppPizzasContextProvider } from "./context/AppPizzasContext";

import Navbar from "./layouts/Navbar";

import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";

function App() {
  return (
    <AppPizzasContextProvider>
      <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/carrito/" element={<Carrito />} />
            </Routes>
      </BrowserRouter>
    </AppPizzasContextProvider> 
  );
}

export default App;
