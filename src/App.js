//COMPONENTS
import ItemListContainer from "./components/containers/ItemListContainer"
import ItemDetailContainer from "./components/containers/ItemDetailContainer";
import NavBar from "./components/navBar/NavBar";
//APIS
import { BrowserRouter, Routes, Route } from "react-router-dom"
//STYLES
import "./App.css";
//Pages
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/category/:categoryId"element={<ItemListContainer greeting="Bienvenido a las categoria de"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
