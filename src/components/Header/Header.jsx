import "./Header.scss";
import { Link } from "react-scroll";
import arrowDown from "/arrowDown.svg";
import { Element } from "react-scroll/modules";

const Header = () => {
  return (
    <Element name="home" className="Header">
      <div>
        <h1>
          Mora <br></br> Cristian
        </h1>
        <h2>Full-Stack developer</h2>
      </div>
      <button className="Header-arrow" type="button">
        <Link spy={true} smooth={true} duration={1000} to="about">
          <img src={arrowDown} alt="arrowDown" />
        </Link>
      </button>
    </Element>
  );
};

export default Header;
