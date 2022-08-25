//COMPONENTS
import ItemCount from "../itemCount/ItemCount";
import NavBar from "../navBar/NavBar";
import ItemList from "../itemList/ItemList"
//HOOKS
import { useState } from "react";
//STYLES
import styled from "styled-components";
//ASSETS
import kitRaymar from "../../assets/kit-raymar.jpeg";
import libroSombras from "../../assets/libro-sombras.jpeg";
import aguaRosas from "../../assets/agua-rosas.jpeg";

const ItemListContainer = ({ greeting }) => {
  const [cartStateCount, setCartState] = useState();

  const onAdd = (counter) => {
    setCartState(counter);
  };

  const articulos = [
    {
      id: 1,
      title: "KIT COMPLETO RAYMAR",
      description:
        "Producto de los mas completos del mercado incluye: sombras satinada, tonos tierra, polvos, rubor, iluminador, paleta de labiales, espuma y brochas",
      price: 28000,
      pictureUrl: kitRaymar,
    },
    {
      id: 2,
      title: "LIBRO SOMBRAS 96 TONOS",
      description:
        "Este producto incluye un libro de sombras x 96 tonos, amaras la pigmentacion que puedes conseguir si quieres darle el toque a tu maquillaje.",
      price: 86000,
      pictureUrl: libroSombras,
    },
    {
      id: 3,
      title: "AGUA DE ROSAS",
      description:
        "Agua de rosas es un producto que debes tener en tu kit de cuidado personal. Ya que calma, regenera, hidrata y tonifica. Tiene poderes antiinflamatorios.",
      price: 13500,
      pictureUrl: aguaRosas,
    }
  ];

  return (
    <>
      <NavBar counter={cartStateCount} />
      <Container>
        {greeting}
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
        <ItemList articulos = {articulos}/>
      </Container>
    </>
  );
};

export default ItemListContainer;

const Container = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  z-index: -1000;
`;
