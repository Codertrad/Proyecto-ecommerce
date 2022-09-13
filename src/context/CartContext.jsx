import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productCartList, setProductCartList] = useState([]);
  const [quantity, setQuantity] = useState(null);
  const [total, setTotal] = useState(0);

  const isInCart = (idProduct) => {
    const productExist = productCartList.some((e) => e.id === idProduct);
    return productExist;
  };

  const addItem = (product, count) => {
    const newList = [...productCartList];

    if (isInCart(product.id)) {
      const productIndex = productCartList.findIndex(
        (e) => e.id === product.id
      );
      newList[productIndex].quantity = newList[productIndex].quantity + count;
      const totalQuantity = quantity + count;
      const totalPrice = newList[productIndex].quantity * product.price;
      setProductCartList(newList);
      setQuantity(totalQuantity);
      setTotal(totalPrice);
    } else {
      const newProduct = { ...product, quantity: count };
      newList.push(newProduct);
      setProductCartList(newList);
      const totalQuantity = quantity + count;
      const totalPrice = count * product.price + total;
      setQuantity(totalQuantity);
      setTotal(totalPrice);
    }
  };

  const removeItem = (productId, productCount) => {
    const copyProducts = [...productCartList];
    const deleteProduct = copyProducts.filter(
      (product) => product.id !== productId
    );
    setQuantity(quantity - productCount);
    setProductCartList(deleteProduct);
  };

  const clear = () => {
    setProductCartList([]);
    setQuantity(null);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{ productCartList, addItem, removeItem, clear, quantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
