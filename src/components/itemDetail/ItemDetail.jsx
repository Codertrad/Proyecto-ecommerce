import React from "react";
import styled from "styled-components";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  const { title, description, price, pictureUrl } = producto;

 /*  const onAdd = (counter) => {
    //setCartState(counter);
  }; */

  return (
    <Container>
      <h2>DETALLES DE PRODUCTO</h2>
      <CardContainer>
        <div className="imgContainer">
          <img src={pictureUrl} alt="" />
        </div>
        <div className="textContainer">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          <p className="price">$ {price}</p>
          <ItemCount stock={10} initial={1} /* onAdd={onAdd} *//>
        </div>
      </CardContainer>
    </Container>
  );
};

export default ItemDetail;

const Container = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const CardContainer = styled.div`
  display: block;
  background-color: #f8f8f8;
  width: 25rem;
  margin: 2rem auto;
  border-radius: 1.2rem;
  transition: all ease 0.6s;
  box-shadow: 10px 8px 14px -1px rgba(0, 0, 0, 0.33);
  -webkit-box-shadow: 10px 8px 14px -1px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 10px 8px 14px -1px rgba(0, 0, 0, 0.33);

  .imgContainer {
    width: 25rem;
    height: 25rem;
    border-radius: 1.2rem 1.2rem 0 0;
    img {
      width: 100%;
      height: 100%;
      border-radius: 1.2rem 1.2rem 0 0;
    }
  }

  .title {
    font-size: 1.7rem;
    padding: 1rem 0;
  }
  .description {
    font-size: 1rem;
    padding: 1rem;
  }
  .price {
    font-size: 1.7rem;
    font-weight: bolder;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 70%;
    align-items: center;

    .imgContainer {
      max-width: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 1.2rem 0 0 1.2rem;
      }
    }
    .textContainer {
      max-width: 50%;
      height: 100%;
      margin: 0 auto;
    }
    .title {
      font-size: 1.5rem;
      padding: .8rem 0;
    }
    .description {
      font-size: 1rem;
      padding: 1rem;
    }
    .price {
      font-size: 1.7rem;
      font-weight: bolder;
    }
  }
`;
