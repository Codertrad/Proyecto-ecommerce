import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productCartList, setProductCartList] = useState([]);

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
      setProductCartList(newList);
    } else {
      const newProduct = { ...product, quantity: count };
      newList.push(newProduct);
      setProductCartList(newList);
    }
  };

  const removeItem = (productId) => {
    const copyProducts = [...productCartList];
    const deleteProduct = copyProducts.filter(
      (product) => product.id !== productId
    );
    setProductCartList(deleteProduct);
  };

  const clear = () => {
    setProductCartList([]);
  };

  return (
    <CartContext.Provider
      value={{ productCartList, addItem, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};
