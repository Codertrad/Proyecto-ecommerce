//COMPONENTS
import ItemDetail from "../itemDetail/ItemDetail";
import { getItem } from "../helper/articulos";
//HOOKS
import { useState , useEffect } from "react";
import {useParams} from "react-router-dom"
//STYLES
import styled from "styled-components";

const ItemDetailContainer = () => {

  const [producto, setProducto ] = useState([])
  const {id} = useParams();

  useEffect(()=>{
   const obtenerProducto = async () =>{
    const listaProductos = await getItem();
    const filtrado = listaProductos.find(producto => producto.id === id)
    setProducto(filtrado)
  }
   obtenerProducto();
  },[id])

  return (
    <>
      <Container>
        <ItemDetail producto = {producto}/>
      </Container>
    </>
  );
};

export default ItemDetailContainer;

const Container = styled.div`

`