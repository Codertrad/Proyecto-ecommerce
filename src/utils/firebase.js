//IMPORTAMOS FUNCIONES NECESARIAS DE LOS SDK QUE UTILIZAREMOS
import { initializeApp } from "firebase/app";
//IMPORTAMOS EL METODO QUE PERMITE LA CONEXION CON LA BASE DE DATOS CREADA EN FIRESTORE
import {getFirestore} from "firebase/firestore"

//CONFIGURACION DE FIREBASE
const firebaseConfig = {
   apiKey: "AIzaSyCqRt0efJ3RW6razI4QxsvSOkckXmkziCI",
   authDomain: "valu-boutique.firebaseapp.com",
   projectId: "valu-boutique",
   storageBucket: "valu-boutique.appspot.com",
   messagingSenderId: "612872436990",
   appId: "1:612872436990:web:ace428f5bf701088e479af",
 };

 //INICIALIZAMOS LA CONEXION DE FIREBASE CON REACT
 const app = initializeApp(firebaseConfig);

 //LE PASAMOS AL METODO getFirestore la variable con la inicializacion de conexion
 //NOS RETORNA LA CONEXION A LA BASE DE DATOS Y LA EXPORTAMOS PARA ACCEDER A LA INFORMACION DESDE OTROS COMPONENTES
 
export const dataBase = getFirestore(app);


