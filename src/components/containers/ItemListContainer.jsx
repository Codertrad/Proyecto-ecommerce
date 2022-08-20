//COMPONENTS
import ItemCount from "../itemCount/ItemCount";
//HOOKS
import { useState } from "react";
//STYLES
import styled from "styled-components";
import NavBar from "../navBar/NavBar";

const ItemListContainer = ({ greeting }) => {
  const [cartStateCount, setCartState] = useState();

  const onAdd = (counter) => {
    setCartState(counter);
  };

  return (
    <>
      <NavBar counter={cartStateCount}/>
      <Container>
        {greeting}
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </Container>
      ;
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
