import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import CartWidget from "./CartWidget";
import { useState } from "react";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <h2 className="logo">LOGO</h2>
        <ul className={`links__container ${clicked ? "active" : ""}`}>
          <li className="link">
            <a href="/">INICIO</a>
          </li>
          <li className="link">
            <a href="/">MAQUILLAJE</a>
          </li>
          <li className="link">
            <a href="/">ACCESORIOS</a>
          </li>
          <li className="link">
            <a href="/">FRAGANCIAS</a>
          </li>
        </ul>
        <CartWidget counter={4}/>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </NavContainer>
      <BgDiv className={`initial ${clicked ? "active" : ""}`}> </BgDiv>
    </>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  background-color: #8a2be2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.2rem;
  color: white;

  .links__container {
    position: absolute;
    top: -700px;
    left: -3000px;
    text-align: center;
    .link {
      margin-top: 1rem;
      padding: 0;
      a {
        color: white;
        font-size: 2rem;
      }
    }
    @media (min-width: 768px) {
      display: flex;
      position: initial;
      margin: 0;
      .link {
        margin: 0 1rem;
        a {
          color: white;
          font-size: 1.2rem;
          display: block;
        }
      }
    }
  }

  .links__container.active {
    width: 100%;
    display: block;
    position: absolute;
    margin: 0;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
  }

  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  position: absolute;
  background-color: #a74bfe;
  top: -1000px;
  left: -2000px;
  z-index: -1;
  width: 100%;
  height: 100%;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 70% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
