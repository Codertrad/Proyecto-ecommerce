//Context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
//Firebase
import { dataBase } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
//Hooks
import { useState } from "react";
//Styles
import styled from "styled-components";
//Routes
import { Link } from "react-router-dom";

const CheckOutContainer = () => {
  const { productCartList, getTotalPrice } = useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");
  const [clicked, setClicked] = useState(false)

  const handlerClick = ()=>{
   setClicked(!clicked)
  }

  const sendOrder = (e) => {
    e.preventDefault();

    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        direccion: e.target[2].value,
        email: e.target[3].value,
      },
      items: productCartList,
      total: getTotalPrice(),
    };
    //Crear la referencia en la base de datos donde voy a guardar el documento
    const queryRef = collection(dataBase, "ordenes de compra");
    //agregamos el documento y obtenemos el id de ref de la orden
    addDoc(queryRef, order).then((respuesta) => setIdOrder(respuesta.id));
  };

  return (
    <>
      <TabMenu>
        <Link to="/cart" className="arrowRight">
          Confirma tu orden
        </Link>
        <Link to="/checkout" className="arrowRight arrowActive">
          Datos de envio
        </Link>
        <span className="arrowRight">Realizar pago</span>
      </TabMenu>
      <FormContainer>
        <form onSubmit={sendOrder}>
          <div>
            <h4>Nombre: </h4>
            <input type="text" placeholder="Nombre completo" />
          </div>
          <div>
            <h4>Numero Telefonico: </h4>
            <input type="number>" placeholder="Numero telefonico" />
          </div>
          <div>
            <h4>Direccion De Entrega: </h4>
            <input type="text" placeholder="Direccion de entrega" />
          </div>
          <div>
            <h4>Correo Electronico:</h4>
            <input type="email" placeholder="Correo electronico" />
          </div>
          <button className={`${clicked ? "inActive" : ""}`} onClick={handlerClick} type="submit">Pagar ahora</button>
          <h3 className={`${clicked ? "" : "inActive"}`}>Tu compra ha sido realizada con exito!</h3>
        </form>
      </FormContainer>
    </>
  );
};

export default CheckOutContainer;

const FormContainer = styled.div`
  margin-top: 2rem;

  div {
    margin: 1rem auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    h4 {
      font-size: 1.2rem;
    }
  }
  button {
    display: block;
    margin: 2rem auto;
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

  .inActive{
   display: none;
  }

  input {
    text-align: center;
    font-size: 1.2rem;
    border: 2px solid #9941ec;
    border-radius: .5rem;
    &::placeholder{
      color:#e5e1e1;
    }
    &:focus{
      outline-color: #d32be2c7;
    }
  }

  h3{
   margin-top: 2rem;
   text-align: center;
   font-size: 3rem;
   color: #d32be2c7;
  }
`;

const TabMenu = styled.div`
  margin-top: 3rem;
  font-weight: bold;
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .arrowRight {
    font-size: 1.1rem;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0rem;
    width: 10rem;
    height: 30px;
    background: #f8f8f8;
    border: solid 1px #d32be2;
    float: left;
    &:hover {
      cursor: pointer;
    }
  }

  .arrowRight:before,
  .arrowRight:after {
    border-bottom: 15px solid transparent;
    border-top: 15px solid transparent;
    top: -1px;
    content: " ";
    position: absolute;
    display: block;
    width: 0;
    height: 0;
  }
  .arrowRight:after {
    border-left: 16px solid #f8f8f8;
    right: -14px;
    z-index: 2;
  }

  .arrowRight:before {
    border-left: 16px solid #d32be2;
    right: -16px;
    z-index: 1;
  }

  .arrowActive {
    color: white;
    background-color: #d32be2;
    &::after {
      border-left: 16px solid #d32be2;
      right: -17px;
    }
    &::before {
      border-left: 17px solid #d32be2;
    }
  }
`;
