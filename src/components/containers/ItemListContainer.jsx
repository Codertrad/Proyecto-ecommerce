/* eslint-disable react-hooks/exhaustive-deps */
//COMPONENTS
import ItemList from "../itemList/ItemList";
//HOOKS
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
//DATABASE FIRESTORE
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../utils/firebase";
//STYLES
import styled from "styled-components";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    const respuestaArticulos = async () => {
      //Consulta a la base de datos
      const query = collection(dataBase, "productos");//accede a la coleccion donde tenemos los productos
      const response = await getDocs(query);//obtiene los documentos de la coleccion
      //nos trae todos los objetos de la coleccion de objetos 
      const docs = response.docs;
      //iteramos la informacion para crear nuevos objetos con toda la informacion tanto el objeto con la informacion + el id de cada producto
      const listadoArticulos = docs.map(doc => {return {...doc.data(), id : doc.id }})

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
        <h1>{greeting} {categoryId}</h1>
        <ItemList articulos={productos} />
      </Container>
    </>
  );
};

export default ItemListContainer;

const Container = styled.div`
  text-align: center;
  font-size: 2rem;
  h1{
    margin:2rem 0;
    font-size: 2rem;

    }
`;
