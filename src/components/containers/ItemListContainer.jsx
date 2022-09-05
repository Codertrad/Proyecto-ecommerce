/* eslint-disable react-hooks/exhaustive-deps */
//COMPONENTS
import ItemList from "../itemList/ItemList";
import {mostrarArticulos} from "../helper/articulos";
//HOOKS
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
//STYLES
import styled from "styled-components";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    const respuestaArticulos = async () => {
      const listadoArticulos = await mostrarArticulos();
      if (categoryId === undefined){
        setProductos(listadoArticulos)
      }else{
        const filtrado = listadoArticulos.filter(articulo => articulo.category === categoryId)
        setProductos(filtrado)
      }
    };
    respuestaArticulos()
  }, [categoryId]);

  return (
    <>
      <Container>
        <h1>{greeting}</h1>
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
