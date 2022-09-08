//COMPONENTS
import ItemListContainer from "./components/containers/ItemListContainer"
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import NavBar from "./components/navBar/NavBar";
import CartContainer from "./components/containers/CartContainer";
//APIS
import { BrowserRouter, Routes, Route } from "react-router-dom"
//STYLES
import "./App.css";
//Pages
import Home from "./pages/Home"
//Context
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenido a las categoria de" />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
