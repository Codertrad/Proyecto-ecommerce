import "./App.css";
import ItemListContainer from "./components/containers/ItemListContainer"
import ItemDetailContainer from "./components/containers/ItemDetailContainer";

function App() {
  return (
    <>
      <ItemListContainer greeting = "Hola Bienvenidos a mi e-commerce"/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
