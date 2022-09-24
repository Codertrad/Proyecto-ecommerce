//HOOKS
import { useState } from "react";
//METODO PARA CREAR CONTEXTO DE REACT
import { createContext } from "react";
//ASIGNAMOS NOMBRE AL CONTEXTO Y LLAMAMOS AL METODO PARA CREARLO
export const CartContext = createContext();

//Funcion que permite proveer el contexto en app
export const CartProvider = ({ children }) => {
  //UseState que almacena los productos que hay en el carrito
  const [productCartList, setProductCartList] = useState([]);

  //funcion que permite saber si el producto esta o no esta dentro del arreglo
  const isInCart = (idProduct) => {
    //el metodo some devuelve true si el producto se encuentra y si no se encuentra el producto por id devuelve un false
    const productExist = productCartList.some((e) => e.id === idProduct);
    return productExist;
  };

  const addItem = (product, count) => {
    //Creamos en una nueva variable una copia del array original de todos los productos
    const newList = [...productCartList];

    //VERIFICO SI EL PRODUCTO EXISTE DENTRO DEL ARREGLO
    //SI EXISTE, ACTUALIZO LA PROPIEDAD QUANTITY DE ESE PRODUCTO

    //funcion que permite saber si un producto esta o no esta dentro del carrito
    if (isInCart(product.id)) {
      //FindIndex busca dentro del arreglo la posicion del producto, si no lo encuentra retorna un -1 y si lo encuentra o la posicion es mayor o igual a 0 lo que quiere decir es que si esta ese producto dentro del arreglo y nos devuelve la posicion
      const productIndex = productCartList.findIndex(
        (e) => e.id === product.id
      );
      //Buscamos dentro del arreglo newList la posicion del producto para modificar la cantidad, le asignamos el valor que tenia anteriormente y le sumamos solamente la nueva cantidad
      newList[productIndex].quantity = newList[productIndex].quantity + count;
      newList[productIndex].totalPrice =
        newList[productIndex].quantity * newList[productIndex].price;
      //Seteamos al carrito la actualizacion que le hicimos al producto
      setProductCartList(newList);

      //SI EL PRODUCTO NO EXISTE, AGREGO EL PRODUCTO AL LISTADO
    } else {
      //creamos un nuevo producto con la informacion que tenia el producto pero no modificamos el orginal, agregamos una nueva propiedad quantity que almacena la cantidad seleccionada del producto y totalPrice que agrega el total de los productos
      const newProduct = {
        ...product,
        quantity: count,
        totalPrice: count * product.price,
      };
      //pusheamos al array de objetos el nuevo producto con la nueva cantidad
      newList.push(newProduct);
      //seteamos los nuevos valores u objetos al array general de productos
      setProductCartList(newList);
    }
  };
  //Esta funcion recibe un id del producto para buscar en todo el arreglo de productos ese producto y removerlo del listado
  const removeItem = (productId) => {
    //Creamos una copia del arreglo de productos
    const copyProducts = [...productCartList];
    //filtramos en el arreglo para obtener solo los elementos  que sean diferentes al id del producto que quiero eliminar
    const deleteProduct = copyProducts.filter(
      (product) => product.id !== productId
    );
    //seteo al arreglo de productos el nuevo arreglo sin el producto que fue eliminado
    setProductCartList(deleteProduct);
  };

  //Funcion que deja vacio el carrito
  const clear = () => {
    //seteamos al arreglo de productos un array vacio, para que asi no haya ningun producto
    setProductCartList([]);
  };

  //Funcion acumuladora de la cantidad de items para mostrar en el cartWidget
  const getTotalProducts = () => {
    //Itera en cada uno de los elementos va a tomar la cantidad de items y la va a ir sumando en una variable general de todos los productos
    const totalProducts = productCartList.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    return totalProducts;
  };

  //Funcion que calcula el precio total del carrito
  const getTotalPrice = () => {
    //Itera en cada uno de los elementos del carrito y va sumando en una variable acumuladora el valor total que tenga cada producto
    const totalPriceCart = productCartList.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );
    return totalPriceCart;
  };

  return (
    <CartContext.Provider
      value={{
        productCartList,
        addItem,
        removeItem,
        clear,
        getTotalProducts,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
