//COMPONENTS
import BurguerButton from "./BurguerButton";
import CartWidget from "./CartWidget";
//HOOKS
import { useState } from "react";
//ROUTES
import { Link } from "react-router-dom";
//STYLES
import styled from "styled-components";

const NavBar = ({ counter }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <Link className="logo" to="/">LOGO</Link>
        <ul className={`links__container ${clicked ? "active" : ""}`}>
          <li className="link">
            <Link to="/">INICIO</Link>
          </li>
          <li className="link">
            <Link to="/category/maquillaje">MAQUILLAJE</Link>
          </li>
          <li className="link">
            <Link to="/category/accesorios">ACCESORIOS</Link>
          </li>
          <li className="link">
            <Link to="/category/fragancias">FRAGANCIAS</Link>
          </li>
        </ul>
        <Link to="/cart"><CartWidget counter={counter} /></Link>
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
  width: 100%;
  top: 0;
  background-color: #8a2be2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.2rem;
  color: white;
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.72);
  -webkit-box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.72);
  position: sticky;
  z-index: +2;

  .logo{
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .burguer{
    z-index: +3;
  }

  .links__container {
    position: absolute;
    top: -700px;
    left: -3000px;
    text-align: center;
    transition: all 0.6s ease;
    z-index: +2;

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
    top: 350%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: +3;
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
  width: 100%;
  height: 100%;
  transition: all 0.6s ease;
  box-shadow: 7px 7px 5px 0px rgba(0, 0, 0, 0.39) inset;
  -webkit-box-shadow: 7px 7px 5px 0px rgba(0, 0, 0, 0.39) inset;
  -moz-box-shadow: 7px 7px 5px 0px rgba(0, 0, 0, 0.39) inset;
  z-index: +1;

  &.active {
    border-radius: 0 0 70% 0;
    top: 5.7rem;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
  }
`;
