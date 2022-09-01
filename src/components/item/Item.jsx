import React from "react";
import styled from "styled-components";

const Item = ({ articulo }) => {

  return (
    <>
      <Card>
        <h3 className="title">{articulo.title}</h3>
        <div className="imgContainer">
          <img src={articulo.pictureUrl} alt="/" />
        </div>
        <div>
          <p className="description">{articulo.description}</p>
          <p className="price">$ {articulo.price} COP</p>
          <button>Ver detalles</button>
        </div>
      </Card>
    </>
  );
};

export default Item;

const Card = styled.div`
  background-color: #f8f8f8;
  width: 25rem;
  margin: 2rem auto;
  padding: 1rem 0;
  border-radius: 1.2rem;
  transition: all ease 0.6s;
  box-shadow: 10px 8px 14px -1px rgba(0, 0, 0, 0.33);
  -webkit-box-shadow: 10px 8px 14px -1px rgba(0, 0, 0, 0.33);
  -moz-box-shadow: 10px 8px 14px -1px rgba(0, 0, 0, 0.33);
  .imgContainer {
    width: 25rem;
    height: 25rem;
    img {
      width: 100%;
      height: 100%;
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

  button {
    text-decoration: none;
    border: none;
    background-color: #9941ec;
    color: white;
    font-size: 1.5rem;
    margin: 1rem auto;
    padding: 0.5rem 7rem;
    border-radius: 1.2rem;
    transition: all ease 0.6s;
    cursor: pointer;
    &:hover {
      background-color: #d32be2c7;
    }
  }

  @media (min-width: 768px) {
    margin: 1rem;
    background-color: #f8f8f8;
    width: 20rem;
    .imgContainer {
      width: 20rem;
      height: 20rem;
    }
    .title {
      font-size: 1.5rem;
    }
    .description {
      font-size: 0.9rem;
    }
    .price {
      font-size: 1.7rem;
    }

    button {
      width: 90%;
      font-size: 1.3rem;
      padding: 0.5rem 0rem;
    }
  }

  @media (min-width: 1299px){
    margin: 1rem;
    background-color: #f8f8f8;
    width: 25rem;
    .imgContainer {
      width: 25rem;
      height: 25rem;
    }
  }
`
