/* eslint-disable react-hooks/exhaustive-deps */
//COMPONENTS
import ItemCount from "../itemCount/ItemCount";
import NavBar from "../navBar/NavBar";
import ItemList from "../itemList/ItemList";
import {mostrarArticulos} from "../helper/articulos";
//HOOKS
import { useState, useEffect } from "react";
//STYLES
import styled from "styled-components";

const ItemListContainer = ({ greeting }) => {
  const [cartStateCount, setCartState] = useState();
  const [productos, setProductos] = useState([]);

  const onAdd = (counter) => {
    setCartState(counter);
  };

  useEffect(() => {
    const respuestaArticulos = async () => {
      const listadoArticulos = await mostrarArticulos();
      setProductos(listadoArticulos)
    };
    respuestaArticulos()
  }, []);

  return (
    <>
      <NavBar counter={cartStateCount} />
      <Container>
        <h1>{greeting}</h1>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
        <ItemList articulos={productos} />
      </Container>
    </>
  );
};

export default ItemListContainer;

const Container = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  h1{
    margin-bottom:2rem;
    font-size: 2rem;
    }
`;
