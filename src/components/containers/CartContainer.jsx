import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { productCartList, removeItem, clear} = useContext(CartContext);

  return (
    <div>
      <p>Cart container</p>
      {
        productCartList.map((producto,index)=>(
          <div key={index}>
            <h2>{producto.title}</h2>
            <h3>{producto.price}</h3>
            <p>{producto.quantity}</p>
            <button onClick={()=>removeItem(producto.id)}>Eliminar Producto</button>
          </div>
        ))
      }
      <button onClick={clear}>Vaciar carrito</button>
    </div>
  );
};

export default CartContainer;
