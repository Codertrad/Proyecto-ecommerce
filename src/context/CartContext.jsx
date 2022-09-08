import { useState } from "react";
import { createContext } from "react";
// import { articulos } from "../components/helper/articulos";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
   // const productCartList = articulos;
   const [productCartList, setProductCartList] = useState([])

   const addProduct = (product)=> {
      const newList = [...productCartList,product]
      setProductCartList(newList)
   }

   const deleteProduct = (productId) => {
      const copyProducts = [...productCartList]
      const deleteProduct = copyProducts.filter(product => product.id !== productId )
      setProductCartList(deleteProduct)
   }

   return(
      <CartContext.Provider value={{productCartList, addProduct, deleteProduct}}> 
         {children}
      </CartContext.Provider>
   )
}