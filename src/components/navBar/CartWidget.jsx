import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

const CartWidget = ({ counter }) => {
  return (
    <Cart>
      <span className="icon">
        <FaShoppingCart />
      </span>
      <span className="counter"> {counter}</span>
    </Cart>
  );
};

export default CartWidget;

const Cart = styled.nav`
  .icon{
   font-size: 2rem;
  }
  .counter{
   font-size: 1.5rem;
  }
`;
