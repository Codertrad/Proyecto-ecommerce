//COMPONENTS
import ItemListContainer from "./components/containers/ItemListContainer"
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import NavBar from "./components/navBar/NavBar";
//APIS
import { BrowserRouter, Routes, Route } from "react-router-dom"
//STYLES
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Hola Bienvenidos a mi e-commerce" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/category/:categoryId"element={<ItemListContainer greeting="Bienvenido a las categorias"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
