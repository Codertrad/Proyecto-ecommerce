//COMPONENTS
import ItemDetail from "../itemDetail/ItemDetail";
//HOOKS
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//DATABASE FIRESTORE
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../utils/firebase";
//STYLES
import styled from "styled-components";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const obtenerProducto = async () => {

      const consultaBd = collection(dataBase, "productos");
      const respuesta = await getDocs(consultaBd);
      const productos = respuesta.docs;

      const listaProductos = productos.map((producto) => {
        return { ...producto.data(), id: producto.id };
      });

      const filtrado = listaProductos.find((producto) => producto.id === id);
      setProducto(filtrado);
    };
    obtenerProducto();
  }, [id]);

  return (
    <>
      <Container>
        <ItemDetail producto={producto} />
      </Container>
    </>
  );
};

export default ItemDetailContainer;

const Container = styled.div``;
