import "./About.scss";
import foto from "/Foto.jpg";
import { Element } from "react-scroll";
import { Title } from "../Title/Title";

const About = () => {
  return (
    <Element name="about" className="About">
      <Title>Sobre mí</Title>
      <div className="About-content">
        <img className="About-content-img" src={foto} alt="CristianMora" />
        <p className="About-content-text">
          Hola soy Cristian, desarrollador web Full-Stack autónomo. Con
          experiencia en diseño y desarrollo de aplicaciones web.
        </p>
      </div>
    </Element>
  );
};

export default About;
