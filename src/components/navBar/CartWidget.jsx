//STYLES
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
//Context
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {quantity} = useContext(CartContext)
  return (
    <Cart>
      <span className="icon">
        <FaShoppingCart />
      </span>
      <span className={`${quantity <= 0 ? "inactive": "counter" }`}>{quantity}</span>
    </Cart>
  );
};

export default CartWidget;

const Cart = styled.nav`
  .icon{
   font-size: 2rem;
   color: white;
  }
  .counter{
   font-size: 1.5rem;
   color:white;
  }
  .inactive{
    display: none;
  }
`;
