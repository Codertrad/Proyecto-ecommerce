//HOOKS
import { useState } from "react";
//STYLES
import styled from "styled-components";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <Card>
        <div className="containerCard">
          <button onClick={decrement}>-</button>
          <span>{counter}</span>
          <button onClick={increment}>+</button>
        </div>
        <div className="addCart">
          <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
        </div>
      </Card>
    </>
  );
};

export default ItemCount;

const Card = styled.div`
  background-color: #f8f8f8;
  margin: 0 auto;
  padding: 1.2rem;
  border-radius: 1.2rem;
  max-width: fit-content;


  .containerCard {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    button {
      padding: 0.2rem 2.5rem;
      font-size: 1.7rem;
      background-color: #9941ec;
      border: none;
      border-radius: 1.2rem;
      color: #ffff;
    }
    span {
      margin: 0 1.2rem;
      color: #000;
      font-size: 2rem;
      font-weight: bolder;
    }
  }
  .addCart {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    button {
      border: none;
      padding: 0.5rem 2.5rem;
      background-color: #9941ec;
      font-size: 1.5rem;
      border-radius: 1.2rem;
      color: #ffff;
    }
  }

  @media ( min-width: 768px){
    .addCart {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    button {
      border: none;
      padding: 0.5rem 2.5rem;
      background-color: #9941ec;
      font-size: 1.2rem;
      border-radius: 1.2rem;
      color: #ffff;
    }
  }
  }
`;
