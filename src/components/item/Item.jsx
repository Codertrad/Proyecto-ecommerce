import React from "react";
import styled from "styled-components";

const Item = ({ articulo }) => {
  return (
    <>
      <Card>
        <h3 className="title">{articulo.title}</h3>
        <img src={articulo.pictureUrl} alt="/" />
        <p className="description">{articulo.description}</p>
        <p className="price">$ {articulo.price} COP</p>
        <button>Ver detalles</button>
      </Card>
    </>
  );
};

export default Item;

const Card = styled.div`
  background-color: #f8f8f8;
  width: 30rem;
  margin: 2rem auto;
  padding: 1rem 0;
  border-radius: 1.2rem;
  transition: all ease 0.6s;
  img {
    width: 30rem;
    height: 30rem;
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

  button {
    text-decoration: none;
    border: none;
    background-color: #9941ec;
    color: white;
    font-size: 1.5rem;
    margin: 1rem auto;
    padding: 0.5rem 10rem;
    border-radius: 1.2rem;
    transition: all ease .6s ;
    &:hover{
      background-color: #d32be2c7;
    }
  }

  @media (min-width: 768px) {
    background-color: #f8f8f8;
    width: 20rem;
    margin: 2rem;
    padding: 1rem 0;
    border-radius: 1.2rem;
    transition: all ease 0.6s;
    img {
      width: 20rem;
      height: 20rem;
    }
    .title {
      font-size: 1.5rem;
      padding: 1rem 0;
    }
    .description {
      font-size: .9rem;
      padding: 1rem;
    }
    .price {
      font-size: 1.7rem;
      font-weight: bolder;
    }

    button {
      text-decoration: none;
      border: none;
      width: 90%;
      background-color: #9941ec;
      color: white;
      font-size: 1.3rem;
      margin: 1rem auto;
      padding: 0.5rem 0rem;
      border-radius: 1.2rem;
    }
  }
`;
