//Context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
//Styles
import styled from "styled-components";
import { IoTrashSharp } from "react-icons/io5";
import { BsCartXFill } from "react-icons/bs";
//Routes
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { productCartList, removeItem, clear, total } = useContext(CartContext);

  return (
    <>
      <CartView>
        <h2 className="titleCart">CARRITO DE COMPRAS</h2>
        {productCartList.length === 0 ? (
          <EmpytCartContainer>
            <BsCartXFill className="cartEmpyt" />
            <h2>No tienes items en el carrito</h2>
            <Link to="/">
              <button>Ver productos</button>
            </Link>
          </EmpytCartContainer>
        ) : (
          <ContainerCart>
            <InfoCart>
              <h3>Producto</h3>
              <h3>Cantidad</h3>
              <h3>Precio</h3>
            </InfoCart>
            {productCartList.map((producto, index) => (
              <ItemCart key={index}>
                <img className="imageItem" src={producto.pictureUrl} alt="" />
                <h3 className="titleItem">{producto.title}</h3>
                <hr />
                <span className="quantityItem">{producto.quantity}</span>
                <hr />
                <h3 className="priceItem">$ {producto.price}</h3>
                <hr />
                <button
                  className="removeItem"
                  onClick={() => removeItem(producto.id, producto.quantity)}
                >
                  <IoTrashSharp />
                </button>
              </ItemCart>
            ))}
            <p className="totalPrice">VALOR TOTAL = $ {total} COP</p>
            <button className="clearCart" onClick={clear}>
              Limpiar carrito
            </button>
          </ContainerCart>
        )}
      </CartView>
    </>
  );
};

export default CartContainer;

const CartView = styled.div`
  .titleCart {
    text-align: center;
    margin-top: 1rem;
  }
`;

const EmpytCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  .cartEmpyt {
    display: block;
    font-size: 20rem;
    margin: 0 auto;
    color: #c9c9c9;
  }
  h2 {
    margin-top: 1rem;
    text-align: center;
    color: #919090;
  }
  button {
    display: block;
    margin: 1rem auto;
    background-color: #9941ec;
    color: white;
    border: none;
    font-size: 1.2rem;
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
    transition: all ease-in 0.3s;
    cursor: pointer;
    &:hover {
      background-color: #d32be2c7;
    }
  }
`;

const ContainerCart = styled.div`
  .clearCart {
    display: block;
    margin: 3rem auto;
    background-color: #9941ec;
    color: white;
    border: none;
    font-size: 1.2rem;
    padding: 0.8rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all ease-in 0.3s;
    &:hover {
      background-color: #d32be2c7;
    }
  }
  .totalPrice{
    margin: 0 auto;
    font-weight: bolder;
    font-size: 1.2rem;
    background-color: #d32be227;
    padding:.3rem ;
    text-align: end;
    max-width: 90%;
    @media (min-width: 768px) {
    max-width:80%;
  }
  }
`;

const InfoCart = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 65%;
  margin: 2.5rem auto -0.8rem 6rem;
  @media (min-width: 768px) {
    max-width:80%;
  }
`;

const ItemCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;
  margin: 1rem auto;
  border-radius: 0.5rem;
  background-color: #f8f8f8;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  hr {
    height: 2.5rem;
  }
  .imageItem {
    width: 5rem;
    height: 5rem;
    border-radius: 0.5rem 0 0 0.5rem;
  }
  .titleItem {
    width: 6rem;
    font-size: 1.2rem;
  }
  .quantityItem {
    font-size: 1.2rem;
    font-weight: bolder;
  }
  .priceItem {
    font-size: 1.2rem;
  }
  .removeItem {
    border: none;
    font-size: 1.5rem;
    margin-right: 1rem;
    background: none;
    color: #9941ec;
    cursor: pointer;
    transition: all ease-in 0.3s;
    &:hover {
      color: #d32be2c7;
    }
  }
  @media (min-width: 768px) {
    max-width:80%;
  }
`;
