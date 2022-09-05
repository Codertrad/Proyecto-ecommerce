import kitRaymar from "../../assets/kit-raymar.jpeg";
import libroSombras from "../../assets/libro-sombras.jpeg";
import aguaRosas from "../../assets/agua-rosas.jpeg";
import vitaminaC from "../../assets/vitamina-c.jpeg";
import glitterSpray from "../../assets/glitter-spray.jpeg";
import labialMate from "../../assets/labial-nude-mate.jpeg";

const articulos = [
  {
    id: "1",
    title: "KIT COMPLETO RAYMAR",
    description:
      "Producto de los mas completos del mercado incluye: sombras satinada, tonos tierra, polvos, rubor, iluminador, paleta de labiales, espuma y brochas",
    price: 28000,
    pictureUrl: kitRaymar,
    category: "maquillaje",
  },
  {
    id: "2",
    title: "LIBRO SOMBRAS 96 TONOS",
    description:
      "Este producto incluye un libro de sombras x 96 tonos, amaras la pigmentacion que puedes conseguir si quieres darle el toque a tu maquillaje.",
    price: 86000,
    pictureUrl: libroSombras,
    category: "maquillaje",
  },
  {
    id: "3",
    title: "AGUA DE ROSAS",
    description:
      "Agua de rosas es un producto que debes tener en tu kit de cuidado personal. Ya que calma, regenera, hidrata y tonifica. Tiene poderes antiinflamatorios.",
    price: 13500,
    pictureUrl: aguaRosas,
    category: "fragancias",
  },
  {
    id: "4",
    title: "VITAMINA C",
    description:
      "Formula avanzada diseñada para atacar los signos mas comunes del envejecimiento, incluye brillo, firmeza, lineas de expresion, arrugas y muchos mas beneficios.",
    price: 20000,
    pictureUrl: vitaminaC,
    category: "accesorios",
  },
  {
    id: "5",
    title: "GLITTER SPRAY",
    description:
      "Glitter de tipo spray, este es un producto que al aplicarse da un toque de brillosidad en la piel, tiene finas particulas de purpurina.es lavable y no mancha la piel.",
    price: 20000,
    pictureUrl: glitterSpray,
    category: "fragancias",
  },
  {
    id: "6",
    title: 'LABIAL NUDE "MATE"',
    description:
      "Los labiales mate se caracterizan por proporcionar un color intenso, opaco y sin brillos, es decir, mate. Crean un efecto satinado que resulta cautivador.",
    price: 10000,
    pictureUrl: labialMate,
    category: "accesorios",
  },
];

export const mostrarArticulos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(articulos);
      reject((err) => console.alert("Hubo una falla de conexion"));
    }, 3000);
  });
};

export const getItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(articulos);
      reject((err) => console.alert("Hubo una falla de conexion"));
    }, 2000);
  });
};
