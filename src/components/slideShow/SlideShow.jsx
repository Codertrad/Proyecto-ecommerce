//Assets
import img1 from "../../assets/banner/1.jpg";
import img2 from "../../assets/banner/2.jpg";
import img3 from "../../assets/banner/3.jpg";
import img4 from "../../assets/banner/4.jpg";
//Styles
import styled from "styled-components";
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
//Hooks
import { useRef, useEffect } from "react";

const SlideShow = () => {
  const slideshow = useRef(null);

  const siguiente = () => {
    //comprobamos que el slideshow tenga elementos
    if (slideshow.current.children.length > 0) {
      //Obtenemos el primer elemento del slideshow
      const primerElemento = slideshow.current.children[0];
      //Establecemos la transicion para el slideshow.
      slideshow.current.style.transition = `300ms ease-out all`;
      //Obtenemos el tamaño
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      //Movemos el slideshow
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        //Reiniciamos la posicion del slideshow.
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = "translateX(0)";
        //Tomamos el primer elemento y lo enviamos al final.
        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      //EventListener para cuando termina la animacion
      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const anterior = () => {
    if (slideshow.current.children.length > 0) {
      //Obtener ultimo elemento del slideshow
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";
      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = "300ms ease-out all";
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };
  //Autoplay
  useEffect(() => {
    setInterval(() => {
      siguiente();
    }, 9000);
  }, []);

  return (
    <ContenedorPrincipal>
      <ContenedorSlideShow ref={slideshow}>
        <Slide>
          <img className="img" src={img1} alt="/" />
        </Slide>
        <Slide>
          <img className="img" src={img2} alt="/" />
        </Slide>
        <Slide>
          <img className="img" src={img3} alt="/" />
        </Slide>
        <Slide>
          <img className="img" src={img4} alt="/" />
        </Slide>
      </ContenedorSlideShow>
      <Controles>
        <Boton onClick={anterior}>
          <HiArrowLeft className="arrow" />
        </Boton>
        <Boton onClick={siguiente}>
          <HiArrowRight className="arrow" />
        </Boton>
      </Controles>
    </ContenedorPrincipal>
  );
};

export default SlideShow;

const ContenedorPrincipal = styled.div`
  position: relative;
`;

const ContenedorSlideShow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
const Slide = styled.div`
  min-width: 100%;
  min-height: 35vh;
  overflow: hidden;
  transition: all ease 0.3s;
  position: relative;
  .img {
    width: 100%;
    min-height: 35vh;
    vertical-align: top;
  }
`;
const Controles = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Boton = styled.button`
  width: 2rem;
  height: 2rem;
  margin: 0 3rem;
  border: none;
  background: none;
  cursor: pointer;

  .arrow {
    width: 2.2rem;
    height: 2.2rem;
    color: white;
    border: #8a2be2 0.1rem solid;
    border-radius: 1.2rem;
    background-color: #8a2be2;
  }
`;
