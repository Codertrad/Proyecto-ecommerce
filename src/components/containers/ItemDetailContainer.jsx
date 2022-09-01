//COMPONENTS
import ItemDetail from "../itemDetail/ItemDetail";
import { getItem } from "../helper/articulos";
//HOOKS
import { useState , useEffect } from "react";
//STYLES
import styled from "styled-components";

const ItemDetailContainer = () => {

  const [producto, setProducto ] = useState([])

  useEffect(()=>{
    getItem
    .then(productos => setProducto(productos.find(prod => prod.id === 1)))
  },[])

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