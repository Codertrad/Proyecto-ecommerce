//COMPONENTS
import ItemListContainer from "./components/containers/ItemListContainer"
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import NavBar from "./components/navBar/NavBar";
import CartContainer from "./components/containers/CartContainer";
import CheckOutContainer from "./components/containers/CheckOutContainer";
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
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="PRODUCTOS DE" />}/>
          <Route path="/cart" element={<CartContainer />}/>
          <Route path="/checkout" element={<CheckOutContainer />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
