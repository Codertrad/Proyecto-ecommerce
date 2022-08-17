import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/containers/ItemListContainer"

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting = "Hola Bienvenidos a mi e-commerce"/>
    </>
  );
}

export default App;
