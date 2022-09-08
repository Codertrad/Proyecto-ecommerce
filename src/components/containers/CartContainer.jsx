import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { productCartList, deleteProduct } = useContext(CartContext);

  return (
    <div>
      <p>Cart container</p>
      {
        productCartList.map(producto=>(
          <div key={producto.id}>
            <h2>{producto.title}</h2>
            <h3>{producto.price}</h3>
            <p>{producto.quantity}</p>
            <button onClick={()=>deleteProduct(producto.id)}>Eliminar Producto</button>
          </div>
        ))
      }
    </div>
  );
};

export default CartContainer;
