import "./Header.scss";
import { Link } from "react-scroll";
import { FaArrowDown } from "react-icons/fa";

const Header = () => {
  return (
    <div id="home" className="Header">
      <div>
        <h1>
          Mora <br></br> Cristian
        </h1>
        <h2>Full-Stack developer</h2>
      </div>
      <button className="Header-arrow" type="button">
        <Link spy={true} smooth={true} duration={1000} to="about">
          <FaArrowDown className="Header-arrow-icon" size={50} />
        </Link>
      </button>
    </div>
  );
};

export default Header;
